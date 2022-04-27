import { Request, Response } from 'express';
import { updateUserService } from '../../services';
import { handleError } from '../../utils';

export const updateUserAdminController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const body = req.validated;
  delete body.key;
  try {
    const user = await updateUserService(id, body);
    return res.status(200).json(user);
  } catch (error) {
    return handleError(error, res);
  }
};
