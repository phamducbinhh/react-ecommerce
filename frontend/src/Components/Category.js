import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { UseHookSearchData } from "../Hooks/useUsingSearch";
import { prices, ratings } from "../Util/constanst";
import Rating from "./Rating";

const Category = () => {
  const { categories, category, getFilterUrl, price, rating } =
    UseHookSearchData();
  return (
    <Fragment>
      <div className="mb-4">
        <h5 className="font-semibold">category</h5>
        <ul>
          <li>
            <Link
              className={"all" === category ? "text-bold" : ""}
              to={getFilterUrl({ category: "all" })}
            >
              All
            </Link>
          </li>
          {categories?.map((c) => (
            <li key={c}>
              <Link
                className={c === category ? "text-bold" : ""}
                to={getFilterUrl({ category: c })}
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="font-semibold">Price</h5>
        <ul>
          <li>
            <Link
              className={"all" === price ? "text-bold" : ""}
              to={getFilterUrl({ price: "all" })}
            >
              All
            </Link>
          </li>
          {prices.map((p) => (
            <li key={p.value}>
              <Link
                to={getFilterUrl({ price: p.value })}
                className={p.value === price ? "text-bold" : ""}
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="font-semibold"> Customer Review</h5>
        <ul>
          {ratings.map((r) => (
            <li key={r.name}>
              <Link
                to={getFilterUrl({ rating: r.rating })}
                className={`${r.rating}` === `${rating}` ? "text-bold" : ""}
              >
                <Rating caption={" & up"} rating={r.rating}></Rating>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to={getFilterUrl({ rating: "all" })}
              className={rating === "all" ? "text-bold" : ""}
            >
              <Rating caption={" & up"} rating={0}></Rating>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Category;