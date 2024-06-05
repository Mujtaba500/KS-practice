import saleController from "../../controller/sale/index.js";
import { Router } from "express";
import verifyToken from "../../middleware/auth.js";
import saleValidator from "../../validators/sale/index.js";

const saleRouter = Router();

//GET ALL SALES
saleRouter.get("/sales", verifyToken, saleController.getAll);

//GET SINGLE SALE
saleRouter.get("/sale/:id", verifyToken, saleController.getSaleById);

//GET SALE WITH PRODUCT
saleRouter.get(
  "/sales/:product",
  verifyToken,
  saleValidator.createSale,
  saleController.getSaleByProduct
);

//CREATE SALE
saleRouter.post("/sales", verifyToken, saleController.create);

export default saleRouter;
