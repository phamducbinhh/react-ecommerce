import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../../Context/Auth-Context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
const CartContent = () => {
  const { state, dispatch } = useStore();
  const { cart } = state;

  //hàm clearAll item
  const handleClearAll = async (cart) => {
    dispatch({
      type: "CLEAR_ALL_ITEM",
      payload: cart,
    });
  };
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.cartItems.map((item) => (
        <CartItem key={item._id} data={item} />
      ))}
      <div className="link-container">
        <Link to="/" className="link-btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={() => handleClearAll(cart)}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals cart={cart} />
    </Wrapper>
  );
};

export default CartContent;