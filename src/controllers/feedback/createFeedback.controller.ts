import { Request, Response } from 'express';
import { IFeedback } from '../../repositories';
import { createFeedback } from '../../services/feedback/createFeedback';

export const createFeedbackController = async (req: Request, res: Response) => {
  const { validated, email } = req;
  const result = await createFeedback(email, validated as IFeedback);
  res.status(201).json(result);
};
