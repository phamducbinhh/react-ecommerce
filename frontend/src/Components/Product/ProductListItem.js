import React from "react";
import styled from "styled-components";
import { UseHookSearchData } from "../../Hooks/useUsingSearch";
import Loading from "../Loading/Loading";
import MessageBox from "../MessageBox";

import Product from "./Product";
const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const ProductListItem = () => {
  const { products, loading } = UseHookSearchData(); //customHooks chứa tất cả các logic phần filter
  return (
    <Wrapper>
      {products?.length === 0 && <MessageBox>No Product Found</MessageBox>}
      {loading && <Loading />}
      <div className="products-container">
        {!loading &&
          products?.map((product) => (
            <Product key={product._id} data={product}></Product>
          ))}
      </div>
    </Wrapper>
  );
};

export default ProductListItem;
