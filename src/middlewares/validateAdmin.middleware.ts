import { NextFunction, Request, Response } from 'express';
import { IUser, UserRepository } from '../repositories';

export const validateAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req;
    const user: IUser = await new UserRepository().findUser('email', email);
    if (user.admin) {
      return next();
    }
    return res.status(401).json({ error: 'not authorized' });
  } catch (error) {
    return res.status(400).json({ error: error.errors[0] });
  }
};
