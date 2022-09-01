const reducer = (state, action) => {
  switch (action.type) {
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
    default:
      throw new Error();
  }
};

const initialState = {
  loading: true,
  error: "",
};

export { reducer, initialState };
