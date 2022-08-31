import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { initialState, reducer } from "../Reducer/reducerFilter";
import { getError } from "../Util/constanst";

//custom hook này để sử dụng ở nhiều nơi trong toàn bộ các danh mục filter
export const UseHookSearchData = () => {
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const category = sp.get("category") || "all";
  const query = sp.get("query") || "all";
  const price = sp.get("price") || "all";
  const rating = sp.get("rating") || "all";
  const order = sp.get("order") || "newest";
  const page = sp.get("page") || 1;
  //khai báo các biến trên tương tự khi click vào 1 sản phẩm sẽ có đường dẫn== http://localhost:3000/products?category=Shirts&query=all&price=all&rating=all&order=newest&page=1

  //khai báo 1 useReducer từ component reducerFilter
  const [{ loading, error, products, pages, countProducts }, dispatch] =
    useReducer(reducer, initialState);

  //lấy api để hiển thị toàn bộ sản phẩm khi có sự thay đổi danh mục
  useEffect(() => {
    const fetchData = async () => {
      try {
        // để lấy ra list dữ liệu, bạn cần gửi request lên server với method GET
        const { data } = await axios.get(
          //khai báo các biến trên tương tự khi click vào 1 sản phẩm sẽ có đường dẫn== http://localhost:3000/products?category=Shirts&query=all&price=all&rating=all&order=newest&page=1
          `/api/products/search?page=${page}&query=${query}&category=${category}&price=${price}&rating=${rating}&order=${order}`
        );
        //setState cho { products, pages, countProducts}
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [category, error, order, page, price, query, rating]);

  //call api để lấy danh sách category từ api backend
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // để lấy ra list dữ liệu, bạn cần gửi request lên server với method GET
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, [dispatch]);

  //các đường dẫn url khi click vào 1 danh mục nào đó nó sẽ tự động lọc
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const filterPrice = filter.price || price;
    const sortOrder = filter.order || order;
    //trả về đường dẫn chứa các sản phẩm tìm kiếm
    return `/products?category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  };

  return {
    category,
    getFilterUrl,
    price,
    rating,
    countProducts,
    query,
    order,
    products,
    categories,
    loading,
    pages,
  };
};
