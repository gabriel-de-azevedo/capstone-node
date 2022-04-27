import { Router } from 'express';
import { createProductController } from '../controllers';
import { getProductControler } from '../controllers';
import {
  validateAdminMiddleware,
  validateBoxId,
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { productModel } from '../models';

const productRoute = Router();

productRoute.post(
  '/product',
  validateModelMiddleware(productModel),
  validateTokenMiddleware,
  validateAdminMiddleware,
  validateBoxId,
  createProductController
);

productRoute.get('/product?', validateTokenMiddleware, getProductControler);

export { productRoute };
