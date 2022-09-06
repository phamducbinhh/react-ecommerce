import axios from "axios";
import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";
import TableHistoryOrder from "../Components/TableHistoryOrder";
import { useStore } from "../Context/Store-Context";
import Heading from "../Layout/Heading";
import { initialState, reducer } from "../Reducer/useReducerOrder";
import { getError } from "../Util/constanst";

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
const OrderHistoryScreen = () => {
  //lấy từ useReducerOrder
  const [{ loading, error, order }, dispatch] = useReducer(
    reducer,
    initialState
  );
  //lấy từ context api
  const { state } = useStore();
  const { userInfo } = state;

  useEffect(() => {
    const getData = async () => {
      try {
        //thực hiện trạng thái yêu cầu lấy dữ liệu từ api
        dispatch({ type: "FETCH_REQUEST" });
        //lấy dũ liệu từ api trả về dữ liệu các đơn đã đặt hàng trước đó
        // để lấy ra list dữ liệu, bạn cần gửi request lên server với method GET
        const { data } = await axios.get(`/api/orders/mine`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        //lưu vào state order tương tự như setState(data)
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: getError(error) });
      }
    };
    getData();
  }, [userInfo]);

  return (
    <Wrapper className="artical-center">
      <Heading>danh sách đơn hàng</Heading>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <TableHistoryOrder order={order} />
      )}
    </Wrapper>
  );
};

export default OrderHistoryScreen;
