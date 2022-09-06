import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { initialState, reducer } from "../Reducer/reducerProductManage";
import axios from "axios";
import { useStore } from "../Context/Store-Context";
import { Link, useLocation } from "react-router-dom";
import Button from "../Components/button/Button";
import TableProduct from "./TableProduct";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  thead {
    height: 50px;
  }
  tr {
    height: 70px;
  }
  div {
    text-align: center;
    margin-top: 20px;
  }
  div a {
    margin-right: 10px;
  }
  .text-bold {
    background-color: var(--clr-primary-7);
  }
  @media only screen and (max-width: 740px) {
    .add-product {
      display: none;
    }
  }
`;
const ProductManage = () => {
  const { state } = useStore();
  const { userInfo } = state;
  //reducerProductManage
  const [{ products, loading, error, pages }, dispatch] = useReducer(
    reducer,
    initialState
  );
  //lấy ra key trong mảng chứa page để thực hiện chức năng phân trang
  const newPages = [...Array(pages).keys()]; //Phương keys()thức này trả về một đối tượng Array Iterator mới có chứa các khóa cho mỗi chỉ mục trong mảng.
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get("page") || 1;

  //call api
  useEffect(() => {
    const fetchData = async () => {
      try {
        // để lấy ra list dữ liệu products, bạn cần gửi request lên server với method GET
        const { data } = await axios.get(`/api/products/admin?page=${page}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        //setState(data)
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, [page, userInfo]);

  // //hàm tạo bài viết mới
  // const createHandler = async () => {
  //   try {
  //     dispatch({ type: "CREATE_REQUEST" });
  //     const { data } = await axios.post(
  //       "/api/products",
  //       {},
  //       {
  //         headers: { Authorization: `Bearer ${userInfo.token}` },
  //       }
  //     );
  //     dispatch({ type: "CREATE_SUCCESS" });
  //     navigate(`/admin/product/${data.product._id}`);
  //   } catch (err) {}
  // };

  return (
    <Wrapper className="artical-center">
      <div className="flex items-center justify-between add-product">
        <h1>Products List</h1>
        <Button kind="ship" style={{ width: "200px" }} to="/admin/product/add">
          Create Products
        </Button>
      </div>
      {/* tableProduct */}
      <TableProduct loading={loading} error={error} products={products} />
      <div>
        {/* logic Phân trang phía client */}
        {newPages.map((x) => (
          <Link
            className={x + 1 === Number(page) ? "btn text-bold" : "btn"}
            key={x + 1}
            to={`/admin/products?page=${x + 1}`}
          >
            {x + 1}
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductManage;
