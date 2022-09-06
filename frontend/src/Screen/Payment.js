import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageHero from "../Components/PageHero";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useStore } from "../Context/Store-Context";
import { useNavigate } from "react-router-dom";
import CheckOutStep from "../Components/Checkout/CheckOutStep";
const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  .payment {
    max-width: 500px;
    margin: 50px auto;
  }
`;
const Payment = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useStore();
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  //sử dụng state để lưu giá trị values
  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || "PayPal"
  );

  //điều kiện nếu không có address thì không được thanh toán
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  //hàm xác nhận phương thức thanh toán
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    navigate("/placeorder");
  };

  return (
    <Wrapper>
      <PageHero title={"Payment"} />
      <CheckOutStep step1 step2 step3 />
      <div className="payment">
        <h1 className="mb-4 text-4xl font-semibold">Phương Thức Thanh Toán</h1>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === "PayPal"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === "Stripe"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Tiếp Tục</Button>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Payment;
