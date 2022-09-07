import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { useStore } from "../Context/Store-Context";
import Heading from "../Layout/Heading";
import { initialState, reducer } from "../Reducer/reducerUserAdmin";
import TableUserList from "./TableUserList";
import axios from "axios";
import { toast } from "react-toastify";
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
`;
const UserListPage = () => {
  const { state } = useStore();
  const { userInfo } = state;

  //reducerUserAdmin
  const [{ users, loading, error, successDelete }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //get api hiển thị danh sách user
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get("/api/users", {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        //setState(data)
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        toast.error(err.message, {
          pauseOnHover: false,
          delay: 0,
        });
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [successDelete, userInfo]);

  return (
    <Wrapper className="artical-center">
      <Heading>Danh sách người dùng</Heading>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <TableUserList users={users} dispatch={dispatch} />
      )}
    </Wrapper>
  );
};

export default UserListPage;
