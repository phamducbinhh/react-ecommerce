import React from "react";
import Product from "./Product";
import styled from "styled-components";
import Loading from "../Loading/Loading";
import { FetchDataProduct } from "../../Hooks/useFetchDataProduct";

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

const ProductFeauture = () => {
  //custom hook fetchDataProduct
  const { products, loading, error } = FetchDataProduct();

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {loading ? (
          <Loading />
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
            <Product key={product.slug} data={product} />
          ))
        )}
      </div>
    </Wrapper>
  );
};

export default ProductFeauture;
