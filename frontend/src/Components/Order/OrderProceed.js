import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Loading from "../Loading/Loading";

const OrderProceed = ({
  order,
  isPending,
  loadingPay,
  createOrder,
  onApprove,
  onError,
}) => {
  return (
    <Card.Body>
      <Card.Title>Order Summary</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col>Items</Col>
            <Col>${order.itemsPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Shipping</Col>
            <Col>${order.shippingPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Tax</Col>
            <Col>${order.taxPrice.toFixed(2)}</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>
              <strong> Order Total</strong>
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
      </ListGroup>
    </Card.Body>
  );
};

export default OrderProceed;
