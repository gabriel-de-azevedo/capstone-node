import { Request, Response } from 'express';
import { Ibox } from '../../repositories';
import { createdBoxService } from '../../services/box/createBox';

export const createBoxController = async (req: Request, res: Response) => {
  const { validated } = req;
  try {
    const result = await createdBoxService(validated as Ibox);
    res.status(201).json(result);
  } catch (e) {
    res.status(409).json(e);
  }
};
