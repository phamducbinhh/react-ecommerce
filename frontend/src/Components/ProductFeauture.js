import React, { useEffect, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reducerProduct";
import Product from "./Product";
import axios from "axios";
import styled from "styled-components";
import Loading from "./Loading";

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, loading, error } = state; //destructuring state

  //call api get products bằng axios
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);

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
