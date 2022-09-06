import React from "react";
import Card from "react-bootstrap/Card";
import MessageBox from "../MessageBox";

const OrderPayment = ({order}) => {
  return (
    <Card.Body>
      <Card.Title>Thanh Toán</Card.Title>
      <Card.Text>
        <strong>Phương Thức:</strong> {order.paymentMethod}
      </Card.Text>
      {order.isPaid ? (
        <MessageBox variant="success">Đã Thanh Toán {order.paidAt}</MessageBox>
      ) : (
        <MessageBox variant="danger">Chưa Thanh Toán</MessageBox>
      )}
    </Card.Body>
  );
};

export default OrderPayment;
