import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { BoxRepository, Ibox } from '../repositories';

dotenv.config();

export const validatedIdBox = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { box } = req.body;
    for (let b in box) {
      if (await new BoxRepository().findBoxByKey('id', box.id)) {
        return;
      }
    }
  } catch (e) {
    return;
  }
};
