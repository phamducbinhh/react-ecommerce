import axios from "axios";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reducerProduct";

export const FetchDataProduct = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, loading, error } = state; //destructuring state

  //call api get products bằng axios
  useEffect(() => {
    const fetchData = async () => {
      //trạng thái loading = true
      dispatch({ type: "FETCH_REQUEST" });
      try {
        // để lấy ra list dữ liệu, bạn cần gửi request lên server với method GET
        const result = await axios.get("/api/products");
        //thực hiện hành động setState(result.data)
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        //bắt lỗi khi call api errors
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return {
    products,
    loading,
    error,
  };
};
