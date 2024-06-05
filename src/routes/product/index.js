import productController from "../../controller/product/index.js";
import { Router } from "express";
import verifyToken from "../../middleware/auth.js";
import productValidator from "../../validators/product/index.js";

const productRouter = Router();

productRouter.get("/products", verifyToken, productController.getProducts);

productRouter.get("/product/:id", verifyToken, productController.getSingle);

productRouter.post(
  "/products",
  verifyToken,
  productValidator.create,
  productController.createProduct
);

productRouter.delete(
  "/product/:id",
  verifyToken,
  productController.deleteProduct
);

export default productRouter;
