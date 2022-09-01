import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { initialState, reducer } from "../Reducer/reducerProductManage";
import axios from "axios";
import { useStore } from "../Context/Store-Context";
import { Link, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";

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
`;
const ProductManage = () => {
  const { state } = useStore();
  const { userInfo } = state;
  // const navigate = useNavigate();
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
        console.log(err);
      }
    };
    fetchData();
  }, [page, userInfo]);

  return (
    <Wrapper>
      <table className="section-center">
        <thead className="thead">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAN</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {/* map data */}
          {!loading &&
            !error &&
            products?.map((product) => (
              <tr key={product._id}>
                <td>{product._id.slice(0, 10)}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {loading && <Loading />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
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
