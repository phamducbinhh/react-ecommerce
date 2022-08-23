import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../../Context/Auth-Context";
import axios from "axios";
import AmountButton from "../AmountButton";

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
  
  //hàm click add to cart
  const handleAddToCart = async () => {
    //tìm sản phẩm có tồn tại trong cart hay không
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    //nếu có sản phẩm tồn tại thì số lượng tăng lên 1
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // gọi api {data} cũng chính bằng props.product nhưng data = id còn product = slug
    const { data } = await axios.get(`/api/products/${product._id}`);
    //nếu sản phẩm hiện có nhỏ hơn số lượng thì sẽ thông báo
    if (data.countInStock < quantity) {
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
        {product.countInStock > 0 && (
          <Link to={"/cart"} className="btn" onClick={handleAddToCart}>
            Add to cart
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

export default AddToCart;
