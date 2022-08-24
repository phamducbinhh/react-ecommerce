import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./router/seedRoutes.js";
import productRouter from "./router/productRoutes.js";



// kết nối với mông db
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
app.use('/api/products', productRouter);

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// app.get("/api/products/slug/:slug", (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
