/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Context/Store-Context";

const AdminRoute = ({ children }) => {
  const { state } = useStore();
  const { userInfo } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.isAdmin || !userInfo) {
      navigate("/signin");
    }
  }, [userInfo, navigate]);
  return children;
};

export default AdminRoute;
