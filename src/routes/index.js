import categoryRouter from "./category/index.js";
import productRouter from "./product/index.js";
import uploadRouter from "./upload/index.js";
import userRouter from "./user/index.js";
import saleRouter from "./sale/index.js";
import emailRouter from "./email/sendEmail.js";

const allRoutes = [
  userRouter,
  uploadRouter,
  categoryRouter,
  productRouter,
  saleRouter,
  emailRouter,
];

export default allRoutes;
