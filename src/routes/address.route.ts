import { Router } from 'express';
import {
  registerAddressController,
  updateAddressController,
} from '../controllers';
import {
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { addressModel, addressPatchModel } from '../models';

const addressRouter = Router();

addressRouter.post(
  '/user/address/register',
  validateModelMiddleware(addressModel),
  validateTokenMiddleware,
  registerAddressController
);

addressRouter.patch(
  '/user/address/update',
  validateModelMiddleware(addressPatchModel),
  validateTokenMiddleware,
  updateAddressController
);

export { addressRouter };
