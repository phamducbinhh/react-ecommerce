const reducer = (state, action) => {
  switch (action.type) {
    //lấy list product
    case "FETCH_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    }
    case "FETCH_FAIL": {
      return { ...state, loading: false, error: action.payload };
    }
    //create-product
    case "CREATE_REQUEST": {
      return { ...state, loading: true };
    }
    case "CREATE_SUCCESS": {
      return { ...state, loading: false };
    }
    case "CREATE_FAIL": {
      return { ...state, loading: false };
    }
    //delete-product
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
};

export { reducer, initialState };
