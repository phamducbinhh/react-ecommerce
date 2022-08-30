import React, { useEffect, useReducer } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useStore } from "../../Context/Store-Context";
import { useNavigate } from "react-router-dom";
import { initialState, reducerOrder } from "../../Reducer/reducerOrder";
import Axios from "axios";
import Loading from "../Loading/Loading";
import Button from "../button/Button";

const OrderCheckout = ({ type = "" }) => {
  //lấy ra từ context api
  const { state, dispatch: ctxDispatch } = useStore();
  const { cart, userInfo } = state;
  const navigate = useNavigate();
  //khai báo 1 useReducer mới
  const [{ loading }, dispatch] = useReducer(reducerOrder, initialState);

  //làm tròn số
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.2345 => 123.23
  //lấy ra giá các sản phẩm
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  //tạo giá shipping
  cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(10);
  //tạo giá thuế
  cart.taxPrice = round2(0.15 * cart.itemsPrice);
  //tạo giá tổng tất cả các chi phí trên
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  //hàm click button thanh toán
  const placeOrderHandler = async () => {
    try {
      dispatch({ type: "CREATE_REQUES" });
      //call api order đã viết từ backend
      //để lưu dữ liệu, bạn cần gửi request lên server với method POST
      const { data } = await Axios.post(
        "/api/orders",
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`, //mã hóa thông tin user
          },
        }
      );
      //khi order xong sẽ tự động xóa tất cả sản phẩm trong cart
      ctxDispatch({ type: "CART_CLEAR" });
      //thực hiện hành động tạo order thành công
      dispatch({ type: "CREATE_SUCCESS" });
      //điều hướng đến trang thanh toán bằng thẻ
      navigate(`/order/${data.order._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //điều khiện nếu không có giá trị cart.paymentMethod
    if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart, navigate]);
  return (
    <Card.Body>
      <Card.Title>Order Summary</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col>Items</Col>
            <Col>$ {cart.itemsPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Shipping</Col>
            <Col>$ {cart.shippingPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Tax</Col>
            <Col>$ {cart.taxPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>
              <strong> Order Total</strong>
            </Col>
            <Col>
              <strong>${cart.totalPrice.toFixed(2)}</strong>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-grid">
            <Button
              type="button"
              kind="ghost"
              onClick={placeOrderHandler}
              disabled={cart.cartItems.length === 0}
            >
              Place Order
            </Button>
          </div>
          {loading && <Loading />}
        </ListGroup.Item>
      </ListGroup>
    </Card.Body>
  );
};

export default OrderCheckout;
