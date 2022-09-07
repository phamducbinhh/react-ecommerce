//reducer admin quản lý các đơn hàng của tất cả người dùng
const reducer = (state, action) => {
  switch (action.type) {
    //lấy dữ liệu danh sách orders từ api
    case "FETCH_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_SUCCESS": {
      return { ...state, orders: action.payload, loading: false };
    }
    case "FETCH_ERROR": {
      return { ...state, error: action.payload, loading: false };
    }
    //delete-orders
    case "DELETE_REQUEST": {
      return { ...state, loading: true, successDelete: false };
    }
    case "DELETE_SUCCESS": {
      return { ...state, loading: false, successDelete: true };
    }
    case "DELETE_FAILURE": {
      return { ...state, loading: false, successDelete: false };
    }
    case "DELETE_RESET": {
      return { ...state, loading: false, successDelete: false };
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
