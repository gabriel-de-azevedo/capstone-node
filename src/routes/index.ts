import { userRouter } from './user.route';
import { feedbackRouter } from './feedback.route';
import { Router } from 'express';
import { addressRouter } from './address.route';
import { productRoute } from './product.route';
import { boxRoute } from './box.route';
import { paymentRouter } from './payment.route';

const routers = Router();
routers.use(userRouter);
routers.use(feedbackRouter);
routers.use(addressRouter);
routers.use(productRoute);
routers.use(boxRoute);
routers.use(paymentRouter);
export { routers };
