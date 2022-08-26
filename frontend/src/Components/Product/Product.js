import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../Rating";
import { FaSearch } from "react-icons/fa";

const ProductListStyles = styled.div`
  .container {
    position: relative;
    border-radius: var(--radius);
    padding: 0;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
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
    opacity: 0.5;
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
    font-weight: 400;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  .rating {
    margin-top: 5px;
  }
`;
const Product = ({ data }) => {
  //destructuring data lấy từ components productFeature
  const { slug, name, price, image, rating, numReviews } = data;
  return (
    <ProductListStyles>
      <div className="container" key={slug}>
        <Link to={`/product/${slug}`}>
          <img src={image} alt={name} />
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
