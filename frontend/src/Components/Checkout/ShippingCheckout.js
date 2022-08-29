import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useStore } from "../../Context/Store-Context";

const ShippingCheckout = () => {
  const { state } = useStore();
  const { cart } = state;
  return (
    <Card.Body>
      <Card.Title>Shipping</Card.Title>
      <Card.Text>
        <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
        <strong>Address: </strong> {cart.shippingAddress.address},
        {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
        {cart.shippingAddress.country}
      </Card.Text>

      <Link to="/shipping">Edit</Link>
    </Card.Body>
  );
};

export default ShippingCheckout;
