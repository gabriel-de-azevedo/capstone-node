import { Router } from 'express';
import { createFeedbackController } from '../controllers/feedback/createFeedback.controller';
import {
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

export { feedbackRouter };
