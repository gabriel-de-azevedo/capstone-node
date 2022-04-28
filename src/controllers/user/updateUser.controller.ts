import { Request, Response } from 'express';
import { updateUserService } from '../../services';
import { handleError } from '../../utils';

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req;
  const body = req.validated;
  delete body.password;

  try {
    const user = await updateUserService(id, body);
    return res.status(200).json(user);
  } catch (error) {
    return handleError(error, res);
  }
};
