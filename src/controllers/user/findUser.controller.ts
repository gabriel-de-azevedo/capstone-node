import { Request, Response } from 'express';
import { findUserByIDService } from '../../services';
import { handleError } from '../../utils';

export const findUserController = async (req: Request, res: Response) => {
  const { email } = req;
  try {
    const user = await findUserByIDService('email', email);
    delete user.password;
    delete user.admin;
    return res.status(200).json(user);
  } catch (error) {
    return handleError(error, res);
  }
};
