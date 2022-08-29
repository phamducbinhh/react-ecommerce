import React from "react";
import Card from "react-bootstrap/Card";
import MessageBox from "../MessageBox";

const OrderShipping = ({ order }) => {
  return (
    <Card.Body>
      <Card.Title>Shipping</Card.Title>
      <Card.Text>
        <strong>Name:</strong> {order.shippingAddress.fullName} <br />
        <strong>Address: </strong> {order.shippingAddress.address},
        {order.shippingAddress.city}, {order.shippingAddress.postalCode},
        {order.shippingAddress.country}
      </Card.Text>
      {order.isDelivered ? (
        <MessageBox variant="success">
          Delivered at {order.deliveredAt}
        </MessageBox>
      ) : (
        <MessageBox variant="danger">Not Delivered</MessageBox>
      )}
    </Card.Body>
  );
};

export default OrderShipping;
