import React, { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { initialState, reducer } from "../Reducer/reducerProduct";
import styled from "styled-components";

import Rating from "../Components/Rating";
import PageHero from "../Components/PageHero";
import AddToCart from "../Components/Card/AddToCart";
import ProductImage from "../Components/Product/ProductImage";
import Loading from "../Components/Loading/Loading";

const Wrapper = styled.div`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .btn {
    padding: 5px;
    background-color: orange;
    border-radius: 8px;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
      font-weight: 700;
      color: green;
    }
  }
`;

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, loading, error } = state; //destructuring state
  console.log(products);

  //call api get products bằng axios
  useEffect(() => {
    const fetchData = async () => {
      //loading = true
      dispatch({ type: "FETCH_REQUEST" });
      try {
        //call api theo slug từng sản phẩm
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        // Tương tự khi sử dụng state : setState(result.data)
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);
  return (
    <Wrapper>
      <PageHero title={products.name} />
      {loading ? (
        <Loading />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="section section-center page">
          <Link to="/" className="btn">
            Back to Home
          </Link>
          <div className="product-center">
            <div className="product-image">
              <ProductImage image={products.image} />
            </div>
            <section className="content">
              <h2>{products.name}</h2>
              <Rating
                rating={products.rating}
                numReviews={products.numReviews}
                className="mt-2 mb-2"
              />
              <h5 className="price">${products.price}</h5>

              <p className="info">
                <span>Description : </span>
                {products.description}
              </p>
              <p className="info">
                <span>Brand :</span>
                {products.brand}
              </p>
              <p className="info">
                <span>Status :</span>
                {products.countInStock > 0 ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Unavailable</span>
                )}
              </p>
              <hr />
              <AddToCart product={products} />
            </section>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default ProductScreen;
