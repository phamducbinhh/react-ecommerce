import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "./Context/Store-Context";
import LayoutMain from "./Layout/LayoutMain";
import CartScreen from "./Screen/CartScreen";
import ErrorPage from "./Screen/ErrorPage";
import HomeScreen from "./Screen/HomeScreen";
import OrderScreen from "./Screen/OrderScreen";
import Payment from "./Screen/Payment";
import PlayOrderScreen from "./Screen/PlayOrderScreen";
import ProductScreen from "./Screen/ProductScreen";
import ShippingScreen from "./Screen/ShippingScreen";
import SignInScreen from "./Screen/SignInScreen";
import SignUpScreen from "./Screen/SignUpScreen";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const App = () => {
  return (
    <Fragment>
      <StoreProvider>
        {/* package react-paypal */}
        <PayPalScriptProvider deferLoading={true}>
          <Routes>
            {/* layout chung của trang web */}
            <Route element={<LayoutMain />}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SignInScreen />} />
              <Route path="/signup" element={<SignUpScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              {/* component lựa chọn phương thức thanh toán */}
              <Route path="/payment" element={<Payment />} />
              {/* component thanh toán */}
              <Route path="/placeorder" element={<PlayOrderScreen />} />
              {/* component hóa đơn */}
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </PayPalScriptProvider>
      </StoreProvider>
    </Fragment>
  );
};

export default App;
