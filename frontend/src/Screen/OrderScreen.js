import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../Context/Store-Context";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";
import { getError } from "../Util/constanst";
import { initialState, reducer } from "../Reducer/useReducerOrder";
import styled from "styled-components";
import OrderShipping from "../Components/Order/OrderShipping";
import OrderPayment from "../Components/Order/OrderPayment";
import OrderItem from "../Components/Order/OrderItem";
import OrderProceed from "../Components/Order/OrderProceed";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  .image {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const OrderScreen = () => {
  const { state } = useStore();
  const { userInfo } = state;

  //lấy id của đơn hàng thanh toán
  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  //lấy từ useReducerOrder
  const [{ loading, error, order, successPay, loadingPay }, dispatch] =
    useReducer(reducer, initialState);

  //tạo reducer của PayPal
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  //hàm xử lý "tạo đơn hàng bằng paypal"
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  };

  //hàm xử lý "phê duyệt" đơn hàng
  const onApprove = (data, actions) => {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: "PAY_REQUEST" });
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`,
          details,
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: "PAY_SUCCESS", payload: data });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (err) {
        dispatch({ type: "PAY_FAIL", payload: getError(err) });
        Swal.fire("Failed", "error", "warning");
      }
    });
  };

  //hàm xử lý lỗi
  const onError = (err) => {
    console.log(getError(err));
  };

  //xử lý logic chính
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        //lấy dũ liệu từ api order trả về thông tin đã thanh toán từ api order
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };

    if (!userInfo) {
      return navigate("/signin");
    }
    //điều kiện tránh trùng id người dùng khi có hóa đơn trùng nhau
    if (!order._id || successPay || (order._id && order._id !== orderId)) {
      fetchOrder();
      if (successPay) {
        dispatch({ type: "PAY_RESET" });
      }
    } else {
      const loadPaypalScript = async () => {
        const { data: clientId } = await axios.get("/api/keys/paypal", {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      loadPaypalScript();
    }
  }, [order, userInfo, orderId, navigate, paypalDispatch, successPay]);

  return loading ? (
    <Loading></Loading>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Wrapper>
      <h1 className="my-3 title-order">Order {orderId}</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            {/* component orderShipping */}
            <OrderShipping order={order} />
          </Card>
          <Card className="mb-3">
            {/* component payment */}
            <OrderPayment order={order} />
          </Card>
          <Card className="mb-3">
            {/* component OrderItem */}
            <OrderItem order={order} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            {/* component OrderProceed */}
            <OrderProceed
              order={order}
              isPending={isPending}
              loadingPay={loadingPay}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default OrderScreen;
