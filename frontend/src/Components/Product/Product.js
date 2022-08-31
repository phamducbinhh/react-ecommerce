import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../Rating";
import { FaSearch } from "react-icons/fa";
import ProductImage from "./ProductImage";

const ProductListStyles = styled.div`
  transition: 0.3s;
  h5 {
    font-size: 13px;
    font-weight: 700;
  }
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    overflow: hidden;
    padding: 0;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    transform: scale(1.05);
    transition: 0.3s;
    opacity: 0.7;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 600;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  .rating {
    margin-top: 5px;
    font-size: 14px;
  }
`;
const Product = ({ data }) => {
  //destructuring data lấy từ components productFeature và component productListItem
  const { slug, name, price, image, rating, numReviews } = data;
  return (
    <ProductListStyles>
      <div className="container" key={slug}>
        <Link to={`/product/${slug}`}>
          <ProductImage image={image} />
        </Link>
        <Link to={`/product/${slug}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <div className="rating">
        <Rating rating={rating} numReviews={numReviews} />
      </div>
      <footer>
        <h5>{name}</h5>
        <p>
          <strong>${price}</strong>
        </p>
      </footer>
    </ProductListStyles>
  );
};

export default Product;
