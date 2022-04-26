import { Request, Response } from 'express';
import { createConnection, getConnection } from 'typeorm';
import { ConnectionTestJest } from '..';
import {
  createFeedbackController,
  getFeedbackController,
} from '../../controllers';
import dbOptions from '../../database/ormconfig';
import { UserRepository } from '../../repositories';
import { insertUserFaker } from '../services/insertUserFaker';
import { createMockFeedback } from '../services/mockFeedbackFaker';
import { createMockUser } from '../services/mockUserFaker';

describe('testing controller feedback', () => {
  const mockReq: Partial<Request> = {};
  const mockRes: Partial<Response> = {};

  beforeAll(async () => {
    await new ConnectionTestJest().create();
  });

  afterAll(async () => {
    await new ConnectionTestJest().clear();
    await new ConnectionTestJest().close();
  });

  beforeEach(async () => {
    await new ConnectionTestJest().clear();
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
  });

  it('testing the feedback.controller in creating a feedback', async () => {
    const user = createMockUser();
    const newUser = new UserRepository().createUser(user);
    const savedUser = await new UserRepository().saveUser(newUser);
    const { password, ...formatedSavedUser } = savedUser;

    mockReq.validated = createMockFeedback();
    mockReq.email = savedUser.email;

    await createFeedbackController(mockReq as Request, mockRes as Response);
    expect(mockRes.status).toBeCalledTimes(1);
    expect(mockRes.status).toBeCalledWith(201);

    expect(mockRes.json).toBeCalledTimes(1);
    expect(mockRes.json).toBeCalledWith(
      expect.objectContaining({
        ...mockReq.validated,
        user: { ...formatedSavedUser },
      })
    );
  });

  it('testing the get function of feedback.controller using filter', async () => {
    const dataMock = await insertUserFaker();
    const { formatedSavedUser1, feedbackUser1 } = dataMock;

    const user = formatedSavedUser1.id;

    mockReq.query = { user };
    await getFeedbackController(mockReq as Request, mockRes as Response);

    expect(mockRes.status).toBeCalledTimes(1);
    expect(mockRes.status).toBeCalledWith(200);

    expect(mockRes.json).toBeCalledTimes(1);
    expect(mockRes.json).toBeCalledWith([formatedSavedUser1.feedbacks]);
  });
});
