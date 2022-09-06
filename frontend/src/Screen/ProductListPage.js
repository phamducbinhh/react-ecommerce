import React from "react";
import styled from "styled-components";
import Filter from "../Components/Filter";
import PageHero from "../Components/PageHero";
import ProductListItem from "../Components/Product/ProductListItem";
import Sort from "../Components/Sort";
const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  .text-bold {
    font-weight: 600;
    border-bottom: 1px solid var(--clr-primary-3);
    padding-bottom: 2px;
    color: #617d98;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

const ProductListPage = () => {
  return (
    <main>
      <PageHero title={"Sản Phẩm"} />
      <Wrapper className="page">
        <div className="section-center products">
          <Filter />
          <div>
            <Sort />
            <ProductListItem />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ProductListPage;
