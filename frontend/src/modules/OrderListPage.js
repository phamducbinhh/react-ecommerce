import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { useStore } from "../Context/Store-Context";
import { initialState, reducer } from "../Reducer/reducerAdminOrder";
import TableOrderList from "./TableOrderList";
import axios from "axios";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";
import { toast } from "react-toastify";
import { getError } from "../Util/constanst";
import Heading from "../Layout/Heading";
import LoadingBox from "../Components/Loading/LoadingBox";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  thead {
    height: 50px;
  }
  tr {
    height: 70px;
  }
`;
const OrderListPage = () => {
  const { state } = useStore();
  const { userInfo } = state;

  //reducerAdminOrder
  const [{ loading, error, orders, successDelete,loadingDelete }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //get dữ liệu từ api để lấy ra danh sách đơn hàng của tất cả các tài khoản
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        // để lấy ra list dữ liệu, bạn cần gửi request lên server với method GET
        const { data } = await axios.get(`/api/orders`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        toast.error(err.message, {
          pauseOnHover: false,
          delay: 0,
        });
        dispatch({ type: "FETCH_ERROR", payload: getError(err) });
      }
    };
    //cập nhật lại bảng ngay sau khi xóa
    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [successDelete, userInfo]);

  return (
    <Wrapper className="artical-center">
      <Heading>Danh sách đơn hàng</Heading>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <TableOrderList orders={orders} dispatch={dispatch} />
      )}
    </Wrapper>
  );
};

export default OrderListPage;
