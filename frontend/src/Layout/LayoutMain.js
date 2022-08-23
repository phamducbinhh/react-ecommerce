import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const LayoutMain = () => {
  return (
    <Fragment>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </Fragment>
  );
};

export default LayoutMain;

// layout chung của trang web
