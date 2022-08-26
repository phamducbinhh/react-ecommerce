import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

//api cho đơn đặt hàng khi yêu cầu POST
const orderRouter = express.Router();
orderRouter.post(
  "/",
  isAuth,
  //Bắt lỗi với expressAsyncHandler
  expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    //hàm order sản phẩm
    const order = await newOrder.save();
    //kết quả khi order thành công
    res.status(201).send({ message: "New Order Created", order });
  })
);
export default orderRouter;
