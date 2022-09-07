const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_SUCCESS": {
      return { ...state, loading: false, users: action.payload };
    }
    case "FETCH_ERROR": {
      return { ...state, loading: false };
    }
    //delete-orders
    case "DELETE_REQUEST": {
      return { ...state, loadingDelete: true, successDelete: false };
    }
    case "DELETE_SUCCESS": {
      return { ...state, loadingDelete: false, successDelete: true };
    }
    case "DELETE_FAILURE": {
      return { ...state, loadingDelete: false, successDelete: false };
    }
    case "DELETE_RESET": {
      return { ...state, loadingDelete: false, successDelete: false };
    }
    default:
      throw new Error();
  }
};

const initialState = {
  loading: true,
  error: "",
};

export { reducer, initialState };
