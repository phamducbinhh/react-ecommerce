import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  .checkout-steps {
    max-width: 700px;
    margin: auto;
  }
  .checkout-steps > div {
    border-bottom: 0.3rem solid #a0a0a0;
    color: #a0a0a0;
  }
  .checkout-steps > div.active {
    border-bottom: 0.3rem solid #f08000;
    color: #f08000;
  }
`;

const CheckOutStep = ({ step1, step2, step3, step4 }) => {
  return (
    <Wrapper>
      <Row className="checkout-steps">
        <Col className={step1 ? "active" : ""}>
          <Link to={"/signin"}>Đăng Nhập</Link>
        </Col>
        <Col className={step2 ? "active" : ""}>
          <Link to={"/shipping"}>Địa Chỉ</Link>
        </Col>
        <Col className={step3 ? "active" : ""}>
          <Link to={"/payment"}>Thanh Toán</Link>
        </Col>
        <Col className={step4 ? "active" : ""}>
          <Link to={"/placeorder"}>Đặt Hàng</Link>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CheckOutStep;
