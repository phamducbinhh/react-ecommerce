import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import Footer from "./Footer";
import Header from "./Header";

const LayoutMain = () => {
  return (
    <Fragment>
      <Header />
      {/* hàm click đóng mở sidebar tab */}
      <SideBar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default LayoutMain;

// layout chung của trang web
