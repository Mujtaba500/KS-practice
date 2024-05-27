import userController from "../../controller/user/index.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/auth/signup", userController.signUp);

userRouter.post("/auth/signin", userController.signIn);

export default userRouter;
