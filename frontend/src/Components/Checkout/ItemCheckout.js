import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import ListItemCheckout from "./ListItemCheckout";
import { useStore } from "../../Context/Store-Context";
import Card from "react-bootstrap/Card";

const ItemCheckout = () => {
  const { state } = useStore();
  const { cart } = state;
  return (
    <Card.Body>
      <Card.Title>Sản Phẩm</Card.Title>
      <ListGroup variant="flush">
        {cart.cartItems.map((item) => (
          <ListGroup.Item key={item._id}>
            {/* component listitem-checkout */}
            <ListItemCheckout item={item} />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Link to="/payment">Sửa</Link>
    </Card.Body>
  );
};

export default ItemCheckout;
