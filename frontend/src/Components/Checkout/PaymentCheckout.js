import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useStore } from "../../Context/Store-Context";

const PaymentCheckout = () => {
  const { state } = useStore();
  const { cart } = state;
  return (
    <Card.Body>
      <Card.Title>Thanh Toán</Card.Title>
      <Card.Text>
        <strong>Phương Thức:</strong> {cart.paymentMethod}
      </Card.Text>
        <Link to="/payment">Sửa</Link>
 
    </Card.Body>
  );
};

export default PaymentCheckout;
