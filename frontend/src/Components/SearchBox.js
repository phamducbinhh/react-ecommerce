import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  //hàm searchbox của product
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(search ? `/products/?query=${search}` : "/search");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <input
          type="text"
          name="text"
          placeholder="search"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBox;
