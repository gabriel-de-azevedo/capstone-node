import { Router } from 'express';
import { createProductController } from '../controllers';
import { getProductControler } from '../controllers';
import {
  validateAdminMiddleware,
  validateTokenMiddleware,
} from '../middlewares';

const productRoute = Router();

productRoute.post(
  '/product',
  validateTokenMiddleware,
  validateAdminMiddleware,
  createProductController
);

productRoute.get('/product?', validateTokenMiddleware, getProductControler);

export { productRoute };
