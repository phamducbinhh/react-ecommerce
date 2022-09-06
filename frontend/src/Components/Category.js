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
        <h5 className="font-semibold">Danh Mục</h5>
        <ul>
          <li className="mb-2 text-sm font-medium">
            <Link
              className={"all" === category ? "text-bold" : ""}
              to={getFilterUrl({ category: "all" })}
            >
              All
            </Link>
          </li>
          {categories?.map((c) => (
            <li key={c} className="mb-2 text-sm">
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
        <h5 className="font-semibold">Giá</h5>
        <ul>
          <li className="mb-2 text-xs font-medium ">
            <Link
              className={"all" === price ? "text-bold" : ""}
              to={getFilterUrl({ price: "all" })}
            >
              All
            </Link>
          </li>
          {prices.map((p) => (
            <li key={p.value} className="mb-2 text-sm">
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
        <h5 className="font-semibold"> Yêu Thích</h5>
        <ul className="text-xs ">
          {ratings.map((r) => (
            <li key={r.name} className="mb-2">
              <Link
                to={getFilterUrl({ rating: r.rating })}
                className={`${r.rating}` === `${rating}` ? "text-bold" : ""}
              >
                <Rating caption={" & up"} rating={r.rating}></Rating>
              </Link>
            </li>
          ))}
          <li className="mb-2">
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
