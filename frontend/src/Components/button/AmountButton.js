import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useStore } from "../../Context/Store-Context";

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

const AmountButton = ({ item }) => {
  //được nhận từ component cartItem vì đã được map chung từ cartContent
  // không gọi state từ context vì phải map data nên dùng item từ components cha đã map
  const {dispatch } = useStore();



  //hàm tăng giảm số lượng sản phẩm gộp chung 2 hàm tăng giảm khi sử dụng reducer + context
  const updateCartHandler = async (item, quantity) => {
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  return (
    <Wrapper className="amount-btns">
      <button
        type="button"
        className="amount-btn"
        onClick={() => updateCartHandler(item, item.quantity - 1)}
        disabled={item.quantity === 1} //vô hiệu hóa sản phẩm khi đã = 1 không thể bấm tiếp
      >
        <FaMinus />
      </button>
      <h2 className="amount">{item?.quantity}</h2>
      <button
        type="button"
        className="amount-btn"
        onClick={() => updateCartHandler(item, item.quantity + 1)}
        disabled={item.quantity === item.countInStock} //vô hiệu hóa khi số lượng tồn kho bằng với số lần chọn
      >
        <FaPlus />
      </button>
    </Wrapper>
  );
};

export default AmountButton;
