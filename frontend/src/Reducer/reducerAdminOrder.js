//reducer admin quản lý các đơn hàng của tất cả người dùng
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_SUCCESS": {
      return { ...state, orders: action.payload, loading: false };
    }
    case "FETCH_ERROR": {
      return { ...state, error: action.payload, loading: false };
    }

    default:
      throw new Error();
  }
};

const initialState = {
  loading: true,
  error: "",
  orders: {},
};
export { reducer, initialState };
