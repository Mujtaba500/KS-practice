import "dotenv/config";
import express from "express";
import { connectDb } from "./db/config.js";
import syncDb from "./db/sync.js";
import allRoutes from "./routes/index.js";
import sendEmail from "./email/sendEmail.js";

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// sendEmail();

app.use(allRoutes);
connectDb();
syncDb().then(() => {
  console.log("DB synced");
});

app.get("/", (req, res) => {
  res.json({
    message: "server started w nodemon",
  });
});

app.listen(port, () => {
  console.log("DB synced");
});
