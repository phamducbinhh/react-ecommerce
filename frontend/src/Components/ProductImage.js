import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 8px;
    object-fit: contain;
    border:  1px solid #ccc;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  }
`;
const ProductImage = ({ image }) => {
  return (
    <Wrapper>
      <img src={image} alt="" className="main " />
    </Wrapper>
  );
};

export default ProductImage;
