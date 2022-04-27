import { Request, Response } from 'express';
import { IPayment } from '../../repositories';
import { createPayment } from '../../services/payment/createPayment';
import { BoxRepository } from '../../repositories';

export const createPaymentController = async (req: Request, res: Response) => {
  const { validated, email } = req;
  const { idBox } = req.body;
  const box = await new BoxRepository().findBoxByKey('id', idBox);
  const result = await createPayment(email, validated as IPayment, box[0]);
  res.status(201).json(result);
};
