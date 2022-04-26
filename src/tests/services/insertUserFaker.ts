import { UserRepository } from '../../repositories';
import { createFeedback } from '../../services/feedback/createFeedback';
import { createMockFeedback } from './mockFeedbackFaker';
import { createMockUser, serializerMockUser } from './mockUserFaker';

const insertUserFaker = async () => {
  const user1 = createMockUser();
  const newUser1 = new UserRepository().createUser(user1);
  const savedUser1 = await new UserRepository().saveUser(newUser1);
  const formatedSavedUser1 = serializerMockUser(savedUser1);

  const user2 = createMockUser();
  const newUser2 = new UserRepository().createUser(user2);
  const savedUser2 = await new UserRepository().saveUser(newUser2);
  const formatedSavedUser2 = serializerMockUser(savedUser2);

  const feedback1 = createMockFeedback('legal');
  const feedbackUser1 = await createFeedback(user1.email, feedback1);

  const feedback2 = createMockFeedback();
  const feedbackUser1Again = await createFeedback(user1.email, feedback2);

  const feedback3 = createMockFeedback();
  const feedbackUser2 = await createFeedback(user2.email, feedback3);

  return {
    savedUser1,
    formatedSavedUser1,
    savedUser2,
    formatedSavedUser2,
    feedbackUser1,
    feedbackUser1Again,
    feedbackUser2,
  };
};

export { insertUserFaker };
