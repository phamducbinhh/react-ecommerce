import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { initialState, reducer } from "../Reducer/reducerProductManage";
import axios from "axios";
import { useStore } from "../Context/Store-Context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Components/button/Button";
import TableProduct from "./TableProduct";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Heading from "../Layout/Heading";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
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
  const navigate = useNavigate();
  const { userInfo } = state;
  //reducerProductManage
  const [
    { products, loading, error, pages, loadingDelete, successDelete },
    dispatch,
  ] = useReducer(reducer, initialState);
  //lấy ra key trong mảng chứa page để thực hiện chức năng phân trang
  const newPages = [...Array(pages).keys()]; //Phương keys()thức này trả về một đối tượng Array Iterator mới có chứa các khóa cho mỗi chỉ mục trong mảng.
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get("page") || 1;

  //call api
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        // để lấy ra list dữ liệu products, bạn cần gửi request lên server với method GET
        const { data } = await axios.get(`/api/products/admin?page=${page}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        //setState(data)
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        toast.error(err.message, {
          pauseOnHover: false,
          delay: 0,
        });
      }
    };
    //reset list product sau khi xóa
    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [page, userInfo, successDelete]);

  // //hàm tạo bài viết mới
  const createHandler = async () => {
    //thu vien confirm add-product
    Swal.fire({
      text: "Bạn muốn thêm sản phẩm mới!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác Nhận!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          dispatch({ type: "CREATE_REQUEST" });
          const { data } = await axios.post(
            "/api/products",
            {},
            {
              headers: { Authorization: `Bearer ${userInfo.token}` },
            }
          );
          dispatch({ type: "CREATE_SUCCESS" });
          navigate(`/admin/product/${data.product._id}`);
        } catch (err) {
          toast.error(err.message, {
            pauseOnHover: false,
            delay: 0,
          });
          dispatch({ type: "CREATE_FAIL" });
        }
        Swal.fire("Sản Phẩm Mới!", "Thêm sản phẩm thành công", "success");
      }
    });
  };

  return (
    <Wrapper className="artical-center">
      <div className="flex items-center justify-between add-product">
        <Heading>Danh sách sản phẩm</Heading>
        <Button kind="ship" style={{ width: "200px" }} onClick={createHandler}>
          Thêm Sản Phẩm
        </Button>
      </div>
      {/* tableProduct */}
      <TableProduct
        loading={loading}
        error={error}
        products={products}
        loadingDelete={loadingDelete}
        dispatch={dispatch}
      />
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
