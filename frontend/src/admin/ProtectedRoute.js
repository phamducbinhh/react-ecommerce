import React from "react";
import { useStore } from "../Context/Store-Context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { state } = useStore();
  const { userInfo } = state;
  //bảo vệ root tránh lộ thông tin người dùng nếu chưa đăng nhập
  return userInfo ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
