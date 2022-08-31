import React from "react";
import styled from "styled-components";
import Category from "./Category";
import SearchBox from "./SearchBox";

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
    border: none;
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    width: 100%;
    outline: none;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

const Filter = () => {
  return (
    <Wrapper>
      <div className="content">
        <SearchBox />
        <div className="form-control">
          <Category />
        </div>
      </div>
    </Wrapper>
  );
};

export default Filter;
