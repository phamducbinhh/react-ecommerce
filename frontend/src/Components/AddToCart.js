import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../Context/Auth-Context";
import AmountButton from "./AmountButton";
import axios from "axios";
import Swal from "sweetalert2";

const Wrapper = styled.div`
  margin-top: 1rem;
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
    text-align: center;
  }
`;
const AddToCart = ({ product }) => {
  const { state, dispatch } = useStore();
  const { cart } = state;
  const [amount, setAmount] = useState(0);
  //hàm tăng giảm số lượng
  const increase = () => {
    setAmount(amount + 1);
  };
  const decrease = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  //hàm click add to cart
  const handleAddToCart = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id); //kiểm tra sản phẩm có tồn tại trong cart hay không
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    //nếu sản phẩm hiện có nhỏ hơn số lượng thì sẽ thông báo
    if (data.countInStock < quantity) {
      Swal.fire("Failed", "Sản phẩm tạm thời hết hàng", "warning");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
  };
  return (
    <Wrapper>
      <div className="">
        <AmountButton increase={increase} decrease={decrease} amount={amount} />
        <Link to="" className="btn" onClick={handleAddToCart}>
          Add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
