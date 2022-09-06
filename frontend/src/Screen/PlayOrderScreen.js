import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import CheckOutStep from "../Components/Checkout/CheckOutStep";
import ShippingCheckout from "../Components/Checkout/ShippingCheckout";
import PaymentCheckout from "../Components/Checkout/PaymentCheckout";
import ItemCheckout from "../Components/Checkout/ItemCheckout";
import OrderCheckout from "../Components/Checkout/OrderCheckout";
import Heading from "../Layout/Heading";

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
      <Heading>THÔNG TIN NHẬN HÀNG</Heading>
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
          <Card className="mb-3">
            {/* component Order-Checkout */}
            <OrderCheckout />
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default PlayOrderScreen;
