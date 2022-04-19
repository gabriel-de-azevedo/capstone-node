import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { IUser, UserRepository } from '../repositories';

dotenv.config();

export const validateAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { key } = req.body;
    const { email } = req;
    const user: IUser = await new UserRepository().findUser('email', email);
    if (key === process.env.ADMIN_KEY || user.admin === true) {
      return next();
    }
    return res.status(401).json({ error: 'not authorized' });
  } catch (error) {
    return res.status(400).json({ error: error.errors[0] });
  }
};
