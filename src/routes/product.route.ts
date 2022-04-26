import { Router } from 'express';
import { createProductController } from '../controllers';
import { getProductControler } from '../controllers';
import {
  validateAdminMiddleware,
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { boxModel } from '../models';

const boxRoute = Router();

boxRoute.post(
  '/box',
  validateModelMiddleware(boxModel),
  validateTokenMiddleware,
  createProductController
);

boxRoute.get(
  '/box?',
  validateTokenMiddleware,
  validateAdminMiddleware,
  getProductControler
);
