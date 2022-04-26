import { Request, Response } from 'express';
import { Iproduct } from '../../repositories';
import { createdProductService } from '../../services';

export const createProductController = async (req: Request, res: Response) => {
  const { validated } = req;
  const result = await createdProductService(validated as Iproduct);
  res.status(201).json(result);
};
