import React from "react";
import { useStore } from "../Context/Store-Context";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { state } = useStore();
  const { userInfo } = state;
  const Navigate = useNavigate();
  //bảo vệ root tránh lộ thông tin người dùng nếu chưa đăng nhập
  if (!userInfo) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
