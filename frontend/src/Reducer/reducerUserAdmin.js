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

    default:
      throw new Error();
  }
};

const initialState = {
  loading: true,
  error: "",
};

export { reducer, initialState };
