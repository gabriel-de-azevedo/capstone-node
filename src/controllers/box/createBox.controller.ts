import { Request, Response } from 'express';
import { Ibox } from '../../repositories';
import { createdBoxService } from '../../services/box/createBox';
import { handleError } from '../../utils';

export const createBoxController = async (req: Request, res: Response) => {
  const { validated } = req;
  try {
    const result = await createdBoxService(validated as Ibox);
    res.status(201).json(result);
  } catch (error) {
    return handleError(error, res);
  }
};
