import { Router } from 'express';
import {
  findAllUsersController,
  findUserController,
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
import { userPatchModel } from '../models/userPatch.model';

const userRouter = Router();

userRouter.post(
  '/user/register',
  validateModelMiddleware(userModel),
  registerUserController
);

userRouter.post(
  '/user/login',
  validateModelMiddleware(userLoginModel),
  loginUserController
);

userRouter.patch(
  '/user/update',
  validateModelMiddleware(userPatchModel),
  validateTokenMiddleware,
  updateUserController
);

userRouter.patch(
  '/user/authorize/:id',
  validateModelMiddleware(userAdminModel),
  validateTokenMiddleware,
  validateAuthMiddleware,
  updateUserAdminController
);

userRouter.get('/user/profile', validateTokenMiddleware, findUserController);

userRouter.get(
  '/user',
  validateTokenMiddleware,
  validateAdminMiddleware,
  findAllUsersController
);

export { userRouter };
