import { Router } from 'express';
import { createPaymentController, getPaymentController } from '../controllers';

import {
  validateAdminMiddleware,
  validateBoxId,
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { paymentModel } from '../models';

const paymentRouter = Router();

paymentRouter.post(
  '/payment',
  validateModelMiddleware(paymentModel),
  validateTokenMiddleware,
  validateBoxId,
  createPaymentController
);

paymentRouter.get(
  '/payment?',
  validateTokenMiddleware,
  validateAdminMiddleware,
  getPaymentController
);

export { paymentRouter };
