import { Request, Response } from 'express';
import { getPaymentService } from '../../services';

const getPaymentController = async (req: Request, res: Response) => {
  const result = await getPaymentService(req.query as any);
  res.status(200).json(result);
};

export { getPaymentController };
