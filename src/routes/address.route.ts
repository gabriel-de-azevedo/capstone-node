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
  '/register/address',
  validateModelMiddleware(addressModel),
  validateTokenMiddleware,
  registerAddressController
);

addressRouter.patch(
  '/update/address',
  validateModelMiddleware(addressModel),
  validateTokenMiddleware,
  updateAddressController
);

export { addressRouter };
