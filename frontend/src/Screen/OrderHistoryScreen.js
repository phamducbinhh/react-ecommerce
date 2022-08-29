import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/button/Button";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";
import { useStore } from "../Context/Store-Context";
import { initialState, reducer } from "../Reducer/useReducerOrder";
import { getError } from "../Util/constanst";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
`;
const OrderHistoryScreen = () => {
  const navigate = useNavigate();
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
      //thực hiện trạng thái yêu cầu lấy dữ liệu từ api
      dispatch({ type: "FETCH_REQUEST" });
      try {
        //lấy dũ liệu từ api trả về dữ liệu các đơn đã đặt hàng trước đó
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
    <Wrapper className="section-center">
      <h1>Order History</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="section-center">
          <thead className="h-[50px]">
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {/* map data */}
            {order.length > 0 &&
              order.map((item) => (
                <tr key={item._id} className="h-[70px]">
                  <td>{item._id}</td>
                  <td>{item.createdAt.substring(0, 10)}</td>
                  <td>{item.totalPrice.toFixed(2)} $</td>
                  <td>{item.isPaid ? item.paidAt.substring(0, 10) : "No"}</td>
                  <td>
                    {item.isDelivered
                      ? item.deliveredAt.substring(0, 10)
                      : "No"}
                  </td>
                  <td>
                    <Button
                      type="button"
                      kind="ship"
                      onClick={() => {
                        navigate(`/order/${item._id}`);
                      }}
                    >
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </Wrapper>
  );
};

export default OrderHistoryScreen;
