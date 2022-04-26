import { Request, Response } from 'express';
import { IPayment } from '../../repositories';
import { createPayment } from '../../services/payment/createPayment';

export const createPaymentController = async (req: Request, res: Response) => {
  const { validated, email } = req;
  const result = await createPayment(email, validated as IPayment);
  res.status(201).json(result);
};
