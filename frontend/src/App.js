import React, { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "./Context/Store-Context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import LayoutMain from "./Layout/LayoutMain";
const CartScreen = lazy(() => import("./Screen/CartScreen"));
const ErrorPage = lazy(() => import("./Screen/ErrorPage"));
const HomeScreen = lazy(() => import("./Screen/HomeScreen"));
const OrderScreen = lazy(() => import("./Screen/OrderScreen"));
const Payment = lazy(() => import("./Screen/Payment"));
const PlayOrderScreen = lazy(() => import("./Screen/PlayOrderScreen"));
const ProductScreen = lazy(() => import("./Screen/ProductScreen"));
const ShippingScreen = lazy(() => import("./Screen/ShippingScreen"));
const SignInScreen = lazy(() => import("./Screen/SignInScreen"));
const SignUpScreen = lazy(() => import("./Screen/SignUpScreen"));
const OrderHistoryScreen = lazy(() => import("./Screen/OrderHistoryScreen"));
const ProfileScreen = lazy(() => import("./Screen/ProfileScreen"));
const ProductListPage = lazy(() => import("./Screen/ProductListPage"));
const ProductManage = lazy(() => import("./modules/ProductManage"));
const ProtectedRoute = lazy(() => import("./admin/ProtectedRoute"));
const AdminRoute = lazy(() => import("./admin/AdminRoute"));
const ProductEditPage = lazy(() => import("./modules/ProductEditPage"));
const OrderListPage = lazy(() => import("./modules/OrderListPage"));
const UserListPage = lazy(() => import("./modules/UserListPage"));
const UserListUpdate = lazy(() => import("./modules/UserListUpdate"));

const App = () => {
  return (
    <Fragment>
      {/* global-context : useReducer + UseContext */}
      <StoreProvider>
        {/* package react-paypal */}
        <PayPalScriptProvider deferLoading={true}>
          <Suspense fallback={<></>}>
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
                {/* User-admin */}
                <Route
                  path="/admin/user"
                  element={
                    <AdminRoute>
                      <UserListPage />
                    </AdminRoute>
                  }
                ></Route>
                {/* User-admin */}
                <Route
                  path="/admin/user/:id"
                  element={
                    <AdminRoute>
                      <UserListUpdate />
                    </AdminRoute>
                  }
                ></Route>
                {/* error page */}
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </Suspense>
        </PayPalScriptProvider>
      </StoreProvider>
    </Fragment>
  );
};

export default App;
