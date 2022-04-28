import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { BoxRepository, Ibox } from '../repositories';

dotenv.config();

export const validateBoxId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { boxId } = req.body;

    const box = await new BoxRepository().findBoxByKey('id', boxId);

    if (!box[0]) {
      return res.status(400).json({ error: 'invalid boxId' });
    }
  } catch {
    return res.status(400).json({ error: 'invalid boxId' });
  }

  return next();
};
