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
    default:
      throw new Error();
  }
};

const initialState = {
  loading: true,
  error: "",
};

export { reducer, initialState };
