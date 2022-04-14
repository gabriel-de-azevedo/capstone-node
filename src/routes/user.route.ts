import { Router } from 'express';
import {
  findAllUsersController,
  findUserByIdController,
  loginUserController,
  registerUserController,
  updateUserAdminController,
  updateUserController,
} from '../controllers';
import {
  validateAdminMiddleware,
  validateAuthMiddleware,
  validateModelMiddleware,
  validateTokenMiddleware,
} from '../middlewares';
import { userAdminModel, userLoginModel, userModel } from '../models';

const userRouter = Router();

userRouter.post(
  '/register',
  validateModelMiddleware(userModel),
  registerUserController
);

userRouter.post(
  '/login',
  validateModelMiddleware(userLoginModel),
  loginUserController
);

userRouter.patch(
  '/update',
  validateModelMiddleware(userModel),
  validateTokenMiddleware,
  updateUserController
);

userRouter.patch(
  '/update/admin/:id',
  validateModelMiddleware(userAdminModel),
  validateTokenMiddleware,
  validateAuthMiddleware,
  updateUserAdminController
);

userRouter.get(
  '/user/:id',
  validateTokenMiddleware,
  validateAdminMiddleware,
  findUserByIdController
);

userRouter.get(
  '/users',
  validateTokenMiddleware,
  validateAdminMiddleware,
  findAllUsersController
);

export { userRouter };
