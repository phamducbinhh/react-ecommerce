import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useStore } from "../../Context/Store-Context";

const PaymentCheckout = () => {
  const { state } = useStore();
  const { cart } = state;
  return (
    <Card.Body>
      <Card.Title>Payment</Card.Title>
      <Card.Text>
        <strong>Method:</strong> {cart.paymentMethod}
      </Card.Text>
      <Link to="/payment">Edit</Link>
    </Card.Body>
  );
};

export default PaymentCheckout;
