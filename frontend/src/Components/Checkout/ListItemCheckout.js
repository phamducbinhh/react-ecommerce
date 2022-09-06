import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ListItemCheckout = ({ item }) => {
  return (
    <div>
      <Row className="align-items-center">
        <Col md={6} className="flex items-center">
          <img src={item.image} alt={item.name} className="mr-3 image" />
          <Link to={`/product/${item.slug}`}>{item.name}</Link>
        </Col>
        <Col md={3}>
          <span>{item.quantity}</span>
        </Col>
        <Col md={3}>${item.price}</Col>
      </Row>
    </div>
  );
};

export default ListItemCheckout;
