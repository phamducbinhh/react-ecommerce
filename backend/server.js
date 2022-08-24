import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./router/seedRoutes.js";
import productRouter from "./router/productRoutes.js";

// kết nối với mongo db
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
