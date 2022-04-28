import { Request, Response } from 'express';
import { getPaymentService } from '../../services';

const getUserPaymentController = async (req: Request, res: Response) => {
  const { id } = req;
  const result = await getPaymentService({
    date: null,
    method: null,
    total: null,
    user: id,
    box: null,
  });
  res.status(200).json(result);
};

export { getUserPaymentController };
