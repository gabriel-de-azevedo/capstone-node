import { Request, Response } from 'express';
import { updateUserService } from '../../services';
import { handleError } from '../../utils';

export const updateUserAdminController = async (
  req: Request,
  res: Response
) => {
  const { email } = req;
  const body = req.validated;
  delete body.key;
  try {
    const user = await updateUserService(email, body);
    return res.status(200).json(user);
  } catch (error) {
    return handleError(error, res);
  }
};
