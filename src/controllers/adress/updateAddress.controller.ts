import { Request, Response } from 'express';
import { updateAddressService } from '../../services';
import { handleError } from '../../utils';

export const updateUserController = async (req: Request, res: Response) => {
  const { email } = req;
  const body = req.validated;

  try {
    const address = await updateAddressService('email', email, body);
    delete address.admin;
    return res.status(200).json(address);
  } catch (error) {
    return handleError(error, res);
  }
};
