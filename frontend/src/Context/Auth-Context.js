import { createContext, useContext, useReducer } from "react";
const AuthContext = createContext();

const StoreProvider = (props) => {
  // giá trị khởi tạo
  const initialState = {
    cart: {
      cartItems: [],
    },
  };
  //tạo hàm reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "CART_ADD_ITEM":
        // add to cart
        // tránh lặp các sản phẩm trùng nhau đẫ add vào cart
        const newItem = action.payload;
        const existItem = state.cart.cartItems.find(
          (item) => item._id === newItem._id
        );
        const cartItems = existItem
          ? state.cart.cartItems.map((item) =>
              item._id === existItem._id ? newItem : item
            )
          : [...state.cart.cartItems, newItem];
        return { ...state, cart: { ...state.cart, cartItems } };
      // return {
      //   ...state,
      //   cart: {
      //     ...state.cart,
      //     cartItems: [...state.cart.cartItems, action.payload],
      //   },
      // };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const values = { state, dispatch };
  return (
    <AuthContext.Provider value={values} {...props}></AuthContext.Provider>
  );
};
const useStore = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
};
export { StoreProvider, useStore };
