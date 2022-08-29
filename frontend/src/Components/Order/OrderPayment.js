import React from "react";
import Card from "react-bootstrap/Card";
import MessageBox from "../MessageBox";

const OrderPayment = ({order}) => {
  return (
    <Card.Body>
      <Card.Title>Payment</Card.Title>
      <Card.Text>
        <strong>Method:</strong> {order.paymentMethod}
      </Card.Text>
      {order.isPaid ? (
        <MessageBox variant="success">Paid at {order.paidAt}</MessageBox>
      ) : (
        <MessageBox variant="danger">Not Paid</MessageBox>
      )}
    </Card.Body>
  );
};

export default OrderPayment;
