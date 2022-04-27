import { Request, Response } from 'express';
import { Iproduct } from '../../repositories';
import { createdProductService } from '../../services';
import { handleError } from '../../utils';

export const createProductController = async (req: Request, res: Response) => {
  const { validated } = req;
  const { boxId } = validated;
  try {
    const result = await createdProductService(validated as Iproduct, boxId);
    res.status(201).json(result);
  } catch (error) {
    return handleError(error, res);
  }
};
