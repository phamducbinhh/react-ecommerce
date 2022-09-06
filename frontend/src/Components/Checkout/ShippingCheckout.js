import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useStore } from "../../Context/Store-Context";

const ShippingCheckout = () => {
  const { state } = useStore();
  const { cart } = state;
  return (
    <Card.Body>
      <Card.Title>Đơn Hàng</Card.Title>
      <Card.Text>
        <strong>Sản Phẩm:</strong> {cart.shippingAddress.fullName} <br />
        <strong>Địa Chỉ: </strong> {cart.shippingAddress.address},
        {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
        {cart.shippingAddress.country}
      </Card.Text>

      <Link to="/shipping">Sửa</Link>
    </Card.Body>
  );
};

export default ShippingCheckout;
