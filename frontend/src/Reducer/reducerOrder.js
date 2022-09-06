//giá trị khởi tạo của state
const initialState = {
  loading: false,
};

//reduceOrder chức năng xử lý đặt hàng
const reducerOrder = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SUCCESS": {
      //xóa khỏi local khi bấm thanh toán
      localStorage.removeItem("cartItems");
      return { ...state, loading: false };
    }
    case "CREATE_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export { initialState, reducerOrder };
