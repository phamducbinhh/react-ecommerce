import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useStore } from "../../Context/Store-Context";

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;
const CartTotals = ({ cart }) => {
  //nhận từ component cartContent lấy từ Context
  const { state } = useStore();
  const { userInfo } = state;

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            giá :
            <span className="text-green-400">
              {/* tính tổng tất cả các sản phẩm hiện có */}(
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)} items) : $
              {/* tính tổng tất cả các sản phẩm trước khi thanh toán */}
              {cart.cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
            </span>
          </h5>
          <p>
            miễn phí ship :<span>...</span>
          </p>
          <hr />
          <h4>
            tổng giá:
            <span className="font-bold text-green-400">
              ${cart.cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
            </span>
          </h4>
        </article>
        {userInfo ? (
          <Link to="/shipping" className="btn">
            thanh toán
          </Link>
        ) : (
          <Link to="/signin" className="btn">
            đăng nhập
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

export default CartTotals;
