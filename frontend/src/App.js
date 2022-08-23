import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "./Context/Auth-Context";
import LayoutMain from "./Layout/LayoutMain";
import CartScreen from "./Screen/CartScreen";
import ErrorPage from "./Screen/ErrorPage";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";

const App = () => {
  return (
    <Fragment>
      <StoreProvider>
        <Routes>
          {/* layout chung của trang web */}
          <Route element={<LayoutMain />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </StoreProvider>
    </Fragment>
  );
};

export default App;
