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
import OrderHistoryScreen from "./Screen/OrderHistoryScreen";
import ProfileScreen from "./Screen/ProfileScreen";
import ProductListPage from "./Screen/ProductListPage";
import DashBoardPage from "./modules/DashBoardPage";
import ProductManage from "./modules/ProductManage";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminRoute from "./admin/AdminRoute";
import ProductEditPage from "./modules/ProductEditPage";
import OrderListPage from "./modules/OrderListPage";

const App = () => {
  return (
    <Fragment>
      {/* global-context : useReducer + UseContext */}
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
              {/* trang danh sách lọc các sản phẩm */}
              <Route path="/products" element={<ProductListPage />} />
              {/* component lựa chọn phương thức thanh toán */}
              <Route path="/payment" element={<Payment />} />
              {/* component thanh toán */}
              <Route path="/placeorder" element={<PlayOrderScreen />} />
              {/* component hóa đơn */}
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              />
              {/* component lịch sử giao dịch */}
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              />
              {/* component trang cá nhân */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashBoardPage />
                  </AdminRoute>
                }
              ></Route>
              {/* product-manage */}
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductManage />
                  </AdminRoute>
                }
              ></Route>
              {/* product-edit */}
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditPage />
                  </AdminRoute>
                }
              ></Route>
              {/* orderList-admin */}
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListPage />
                  </AdminRoute>
                }
              ></Route>
              {/* error page */}
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </PayPalScriptProvider>
      </StoreProvider>
    </Fragment>
  );
};

export default App;
