import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "./Context/Store-Context";
import LayoutMain from "./Layout/LayoutMain";
import CartScreen from "./Screen/CartScreen";
import ErrorPage from "./Screen/ErrorPage";
import HomeScreen from "./Screen/HomeScreen";
import Payment from "./Screen/Payment";
import PlayOrderScreen from "./Screen/PlayOrderScreen";
import ProductScreen from "./Screen/ProductScreen";
import ShippingScreen from "./Screen/ShippingScreen";
import SignInScreen from "./Screen/SignInScreen";
import SignUpScreen from "./Screen/SignUpScreen";

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
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/placeorder" element={<PlayOrderScreen />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </StoreProvider>
    </Fragment>
  );
};

export default App;
