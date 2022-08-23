import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartContent from "../Components/Card/CartContent";
import PageHero from "../Components/PageHero";
import { useStore } from "../Context/Auth-Context";

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;
const CartScreen = () => {
  const { state } = useStore();
  const { cart } = state;
  if (cart.cartItems.length === 0) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

export default CartScreen;
