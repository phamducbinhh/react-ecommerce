import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  img {
    width: 100%;
    display: block;
    object-fit: cover;
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
