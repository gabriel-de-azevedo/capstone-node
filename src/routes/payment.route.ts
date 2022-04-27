import { Router } from 'express';
import { createPaymentController } from '../controllers';

import {
  validateAdminMiddleware,
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { paymentModel } from '../models';

const paymentRouter = Router();

paymentRouter.post(
  '/payment',
  validateModelMiddleware(paymentModel),
  validateTokenMiddleware,
  createPaymentController
);

// feedbackRouter.get(
//   '/feedback?',
//   validateTokenMiddleware,
//   validateAdminMiddleware,
//   getFeedbackController
// );

export { paymentRouter };
