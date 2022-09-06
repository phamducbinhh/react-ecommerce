const reducer = (state, action) => {
  switch (action.type) {
    //show
    case "FETCH_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_SUCCESS": {
      return { ...state, products: action.payload, loading: false };
    }
    case "FETCH_FAIL": {
      return { ...state, loading: false, error: action.payload };
    }
    // update prodcut
    case "UPDATE_REQUEST": {
      return { ...state, loading: true };
    }
    case "UPDATE_SUCCESS": {
      return { ...state, loading: false };
    }
    case "UPDATE_FAIL": {
      return { ...state, loading: false };
    }
    //upload image
    case "UPLOAD_REQUEST": {
      return { ...state, loadingUpload: true, errorUpload: "" };
    }
    case "UPLOAD_SUCCESS": {
      return { ...state, loadingUpload: false, errorUpload: "" };
    }
    case "UPLOAD_FAIL": {
      return { ...state, loadingUpload: false, errorUpload: action.payload };
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
