import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Loading from "../Loading/Loading";
import { useStore } from "../../Context/Store-Context";
import Button from "../button/Button";

const OrderProceed = ({
  order,
  isPending,
  loadingPay,
  createOrder,
  onApprove,
  onError,
  deliverOrderHandler,
  loadingDeliver,
}) => {
  const { state } = useStore();
  const { userInfo } = state;
  return (
    <Card.Body>
      <Card.Title>Thành Tiền</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col>Tiền hàng</Col>
            <Col>${order.itemsPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Phí vận chuyển</Col>
            <Col>${order.shippingPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Thuế</Col>
            <Col>${order.taxPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>
              <strong>Tổng cộng</strong>
            </Col>
            <Col>
              <strong>${order.totalPrice.toFixed(2)}</strong>
            </Col>
          </Row>
        </ListGroup.Item>
        {!order.isPaid && (
          <ListGroup.Item>
            {isPending ? (
              <Loading />
            ) : (
              <div>
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={onError}
                ></PayPalButtons>
              </div>
            )}
            {loadingPay && <Loading></Loading>}
          </ListGroup.Item>
        )}
        {/* xác nhận giao hàng */}
        {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
          <ListGroup.Item>
            <div className="d-grid">
              <Button
                type="button"
                kind="ghost"
                onClick={deliverOrderHandler}
                isLoading={loadingDeliver}
              >
                Xác Nhận Giao Hàng
              </Button>
            </div>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Card.Body>
  );
};

export default OrderProceed;
