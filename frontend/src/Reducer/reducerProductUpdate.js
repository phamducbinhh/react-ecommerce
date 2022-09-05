const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_SUCCESS": {
      return { ...state, products: action.payload, loading: false };
    }
    case "FETCH_FAIL": {
      return { ...state, loading: false, error: action.payload };
    }
    case "UPDATE_REQUEST": {
      return { ...state, loading: true };
    }
    case "UPDATE_SUCCESS": {
      return { ...state, loading: false };
    }
    case "UPDATE_FAIL": {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};

const initialState = {
  products: [],
  loading: true,
  error: "",
};

export { reducer, initialState };
