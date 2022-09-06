import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    //logic searchBox chỉ cần điều hướng đến đúng đường dẫn url do api xử lý logic sẵn
    navigate(search ? `/products/?query=${search}` : "/search");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <input
          type="text"
          name="text"
          placeholder="Tìm Kiếm"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBox;
