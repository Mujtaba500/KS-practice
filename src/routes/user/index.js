import userController from "../../controller/user/index.js";
import { Router } from "express";
import middlewareAuth from "../../middleware/auth.js";

const userRouter = Router();

userRouter.post("/auth/signup", userController.signUp);

userRouter.post("/auth/signin", middlewareAuth, userController.signIn);

export default userRouter;
