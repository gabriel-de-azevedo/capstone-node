import { userRouter } from './user.route';
import { feedbackRouter } from './feedback.route';
import { Router } from 'express';
import { addressRouter } from './address.route';

const routers = Router();
routers.use(userRouter);
routers.use(feedbackRouter);
routers.use(addressRouter);
export { routers };
