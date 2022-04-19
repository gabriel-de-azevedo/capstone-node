import { Request, Response } from 'express';
import { getFeedbackService } from '../../services';

const getFeedbackController = async (req: Request, res: Response) => {
  const result = await getFeedbackService(req.query as any);
  res.status(200).json(result);
};

export { getFeedbackController };
