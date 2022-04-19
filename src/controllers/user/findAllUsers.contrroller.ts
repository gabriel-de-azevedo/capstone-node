import { Request, Response } from 'express';
import { findAllUserService } from '../../services';
import { handleError } from '../../utils';

export const findAllUsersController = async (_: Request, res: Response) => {
  try {
    const users = await findAllUserService();
    return res.status(200).json(users);
  } catch (error) {
    return handleError(error, res);
  }
};
