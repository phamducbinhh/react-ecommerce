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
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
