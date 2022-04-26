import { Request, Response } from 'express';
import { Ibox } from '../../repositories';
import { createdBoxService } from '../../services/box/createBox';

export const createBoxController = async (req: Request, res: Response) => {
  const { validated } = req;
  const result = await createdBoxService(validated as Ibox);
  res.status(201).json(result);
};
