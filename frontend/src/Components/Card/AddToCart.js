import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../../Context/Store-Context";
import axios from "axios";

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
    font-size: 12px;
  }
`;
const AddToCart = ({ product }) => {
  //nhận giá trị đã map từ component ProductSreen thông qua props
  const { state, dispatch } = useStore();
  //lấy cart từ trong react-context
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
    // thực hiện hành động add
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
            thêm vào giỏ hàng
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

export default AddToCart;
