import { Router } from "express";
import {
  loginUserController, registerUserController
} from "../controllers";
import {
  validateModelMiddleware
} from "../middlewares";
import { userLoginModel, userModel } from "../models";

const userRouter = Router();

userRouter.post(
  "/register",
  validateModelMiddleware(userModel),
  registerUserController
);

userRouter.post(
  "/login",
  validateModelMiddleware(userLoginModel),
  loginUserController
);

export { userRouter };
