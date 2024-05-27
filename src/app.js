import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "server started w nodemon",
  });
});

app.listen(port, () => {
  console.log("DB synced");
});
