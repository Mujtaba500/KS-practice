import emailController from "../../email/sendEmail.js";
import { Router } from "express";
import verifyToken from "../../middleware/auth.js";
import emailValidator from "../../validators/email/index.js";

const emailRouter = Router();

emailRouter.post(
  "/email",
  verifyToken,
  emailValidator.send,
  emailController.sendEmail
);

export default emailRouter;
