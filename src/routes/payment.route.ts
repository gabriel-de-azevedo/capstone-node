import { Router } from 'express';
import {
  createPaymentController,
  getPaymentController,
  getUserPaymentController,
} from '../controllers';

import {
  validateAdminMiddleware,
  validateBoxId,
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { paymentModel } from '../models';

const paymentRouter = Router();

paymentRouter.post(
  '/box/payment',
  validateModelMiddleware(paymentModel),
  validateTokenMiddleware,
  validateBoxId,
  createPaymentController
);

paymentRouter.get(
  '/box/payment?',
  validateTokenMiddleware,
  validateAdminMiddleware,
  getPaymentController
);

paymentRouter.get(
  '/box/payment/user',
  validateTokenMiddleware,
  getUserPaymentController
);

export { paymentRouter };
