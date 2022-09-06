/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate } from "react-router-dom";
import { useStore } from "../Context/Store-Context";

const AdminRoute = ({ children }) => {
  const { state } = useStore();
  const { userInfo } = state;
  //bảo vệ root tránh lộ thông tin người dùng nếu chưa đăng nhập
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
};

export default AdminRoute;
