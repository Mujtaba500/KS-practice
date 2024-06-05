import categoryController from "../../controller/category/index.js";
import { Router } from "express";
import verifyToken from "../../middleware/auth.js";
import categoryValidator from "../../validators/category/index.js";

const categoryRouter = Router();

categoryRouter.get("/category", verifyToken, categoryController.getCategory);

categoryRouter.post(
  "/category",
  verifyToken,
  categoryValidator.create,
  categoryController.createCategory
);

export default categoryRouter;
