import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import CheckOutStep from "../Components/Checkout/CheckOutStep";
import ShippingCheckout from "../Components/Checkout/ShippingCheckout";
import PaymentCheckout from "../Components/Checkout/PaymentCheckout";
import ItemCheckout from "../Components/Checkout/ItemCheckout";

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  .image {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const PlayOrderScreen = () => {
  return (
    <Wrapper>
      <CheckOutStep step1 step2 step3 step4 />
      <h1 className="my-3">Preview Order</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            {/* component shipping */}
            <ShippingCheckout />
          </Card>
          <Card className="mb-3">
            {/* component paymentCheckout */}
            <PaymentCheckout />
          </Card>
          <Card className="mb-3">
            {/* component itemCheckout */}
            <ItemCheckout />
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
              
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Order Total</strong>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
               
                    >
                      Place Order
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default PlayOrderScreen;
