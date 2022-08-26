import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

//rest api đăng nhập tài khoản
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        //dữ liệu cần gửi đi từ api
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

//api đăng ký tài khoản
userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    // tạo tài khoản gồm các trường name , email , password
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    //dữ liệu cần gửi đi từ api
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user), //mã hóa password bằng jsonwebtoken
    });
  })
);

export default userRouter;
