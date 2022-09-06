import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const OrderItem = ({ order }) => {
  return (
    <Card.Body>
      <Card.Title>Sản Phẩm</Card.Title>
      <ListGroup variant="flush">
        {order.orderItems.map((item) => (
          <ListGroup.Item key={item._id}>
            <Row className="align-items-center">
              <Col md={6}>
                <img src={item.image} alt={item.name} className="image"></img>{" "}
                <Link to={`/product/${item.slug}`}>{item.name}</Link>
              </Col>
              <Col md={3}>
                <span>{item.quantity}</span>
              </Col>
              <Col md={3}>${item.price}</Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card.Body>
  );
};

export default OrderItem;
