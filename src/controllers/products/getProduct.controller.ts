import { Request, Response } from 'express';
import { getProductService } from '../../services';

const getProductControler = async (req: Request, res: Response) => {
  const result = await getProductService(req.query as any);
  res.status(200).json(result);
};

export { getProductControler };
