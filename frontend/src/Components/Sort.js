import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UseHookSearchData } from "../Hooks/useUsingSearch";
import Button from "./button/Button";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

const Sort = () => {
  const { countProducts, category, getFilterUrl, price, rating, query, order } =
    UseHookSearchData();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="btn-container"></div>
      <div className="flex">
        {countProducts === 0 ? "No" : countProducts} Sản Phẩm
        {query !== "all" && " : " + query}
        {category !== "all" && " : " + category}
        {price !== "all" && " : Price " + price}
        {rating !== "all" && " : Rating " + rating + " & up"}
        {query !== "all" ||
        category !== "all" ||
        rating !== "all" ||
        price !== "all" ? (
          <Button kind="ship" onClick={() => navigate("/products")}>
            <i className="fas fa-times-circle"></i>
          </Button>
        ) : null}
      </div>
      <hr />
      <form>
        <label htmlFor="sort">Sắp xếp theo</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={order}
          onChange={(e) => {
            navigate(getFilterUrl({ order: e.target.value }));
          }}
        >
          <option value="newest">mới nhẩt</option>
          <option value="lowest">giá: thấp đến cao</option>
          <option value="highest">giá: cao đến thấp</option>
          <option value="toprated">đánh giá. độ yêu thích</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;
