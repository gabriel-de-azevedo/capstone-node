import { userRouter } from './user.route';
import { feedbackRouter } from './feedback.route';
import { Router } from 'express';

const routers = Router();
routers.use(userRouter);
routers.use(feedbackRouter);
export { routers };
