import "dotenv/config";
import express from "express";
import { connectDb } from "./db/config.js";
import syncDb from "./db/sync.js";
import userRouter from "./routes/user/index.js";

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use(userRouter);
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
