import React from "react";
import Product from "./Product";
import styled from "styled-components";
import Loading from "../Loading/Loading";
import { FetchDataProduct } from "../../Hooks/useFetchDataProduct";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  h2 {
    color: #102a42;
    font-size: 40px;
    font-weight: 700;
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    margin: 0 auto;
    text-align: center;
  }
  .btn-wrap {
    width: 100%;
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
        <h2>Sản Phẩm Nổi Bật</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {loading ? (
          <Loading />
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.slice(0,6).map((product) => (
            <Product key={product.slug} data={product} />
          ))
        )}
      </div>
      <div className="btn-wrap">
        <Link to="/products" className="btn">
          Xem Thêm
        </Link>
      </div>
    </Wrapper>
  );
};

export default ProductFeauture;
