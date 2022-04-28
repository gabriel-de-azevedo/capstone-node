import { Router } from 'express';
import {
  registerAddressController,
  updateAddressController,
} from '../controllers';
import {
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { addressModel } from '../models';

const addressRouter = Router();

addressRouter.post(
  '/user/address/register',
  validateModelMiddleware(addressModel),
  validateTokenMiddleware,
  registerAddressController
);

addressRouter.patch(
  '/user/address/update',
  validateModelMiddleware(addressModel),
  validateTokenMiddleware,
  updateAddressController
);

export { addressRouter };
