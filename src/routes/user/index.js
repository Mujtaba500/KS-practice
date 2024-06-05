import userController from "../../controller/user/index.js";
import { Router } from "express";
import authValidator from "../../validators/auth/index.js";

const userRouter = Router();

userRouter.post("/auth/signup", authValidator.signUp, userController.signUp);

userRouter.post("/auth/signin", authValidator.signIn, userController.signIn);

export default userRouter;
