import { Router } from 'express';
import {
  createFeedbackController,
  getFeedbackController,
} from '../controllers';

import {
  validateAdminMiddleware,
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { feedbackModel } from '../models';

const feedbackRouter = Router();

feedbackRouter.post(
  '/feedback',
  validateModelMiddleware(feedbackModel),
  validateTokenMiddleware,
  createFeedbackController
);

feedbackRouter.get(
  '/feedback?',
  validateTokenMiddleware,
  validateAdminMiddleware,
  getFeedbackController
);

export { feedbackRouter };
