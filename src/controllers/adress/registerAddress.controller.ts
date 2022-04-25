import { Request, Response } from 'express';
import { registerAddressService } from '../../services';
import { handleError } from '../../utils';

export const registerAddressController = async (req: Request, res: Response) => {
  try {
    const newAddress = await registerAddressService(req.validated);
    return res.status(201).json(newAddress);
  } catch (error) {
    return handleError(error, res);
  }
};
