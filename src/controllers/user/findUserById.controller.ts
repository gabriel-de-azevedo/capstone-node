import { Request, Response } from 'express';
import { findUserByIDService } from '../../services';
import { handleError } from '../../utils';

export const findUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await findUserByIDService('id', id);
    return res.status(200).json(user);
  } catch (error) {
    return handleError(error, res);
  }
};
