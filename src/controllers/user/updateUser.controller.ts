import { Request, Response } from 'express';
import { updateUserService } from '../../services';
import { handleError } from '../../utils';

export const updateUserController = async (req: Request, res: Response) => {
  const { email } = req;
  const body = req.validated;

  try {
    const user = await updateUserService('email', email, body);
    delete user.admin;
    return res.status(200).json(user);
  } catch (error) {
    return handleError(error, res);
  }
};
