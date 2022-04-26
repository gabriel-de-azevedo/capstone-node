import { Request, Response } from 'express';
import { getBoxService } from '../../services/box/getBox';

const getBoxControler = async (req: Request, res: Response) => {
  const result = await getBoxService(req.query as any);
  res.status(200).json(result);
};

export { getBoxControler };
