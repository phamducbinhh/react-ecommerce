import React from "react";
import Card from "react-bootstrap/Card";
import MessageBox from "../MessageBox";

const OrderShipping = ({ order }) => {
  return (
    <Card.Body>
      <Card.Title>Đơn Hàng</Card.Title>
      <Card.Text>
        <strong>Sản Phẩm:</strong> {order.shippingAddress.fullName} <br />
        <strong>Địa Chỉ: </strong> {order.shippingAddress.address}
        {order.shippingAddress.city}, {order.shippingAddress.postalCode},
        {order.shippingAddress.country}
      </Card.Text>
      {order.isDelivered ? (
        <MessageBox variant="success">
          Đang Giao Hàng {order.deliveredAt}
        </MessageBox>
      ) : (
        <MessageBox variant="danger">Chưa Giao Hàng</MessageBox>
      )}
    </Card.Body>
  );
};

export default OrderShipping;
