import { createContext, useContext, useReducer } from "react";
const AuthContext = createContext();

//kho chứa các sản phẩm đã thêm
const StoreProvider = (props) => {
  // giá trị khởi tạo
  const initialState = {
    cart: {
      //Lưu vào
      cartItems: localStorage.getItem("cartItem")
        ? JSON.parse(localStorage.getItem("cartItem"))
        : [],
      //tương tự giống như dùng state : useState(JSON.parse(localStorage.getItem("cartItem") || [])
    },
  };
  //tạo hàm reducer
  const reducer = (state, action) => {
    switch (action.type) {
      // add to cart
      case "CART_ADD_ITEM": {
        //sản phẩm thêm mới
        const newItem = action.payload;
        //sản phẩm hiện tại có trùng với sản phẩm thêm mới hay không
        const existItem = state.cart.cartItems.find(
          (item) => item._id === newItem._id
        );
        const cartItems = existItem
          ? state.cart.cartItems.map((item) =>
              item._id === existItem._id ? newItem : item
            )
          : [...state.cart.cartItems, newItem];
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
        return { ...state, cart: { ...state.cart, cartItems } };
      }
      //remove cart
      case "CART_REMOVE_ITEM": {
        //dùng hàm filter xóa từng sản phẩm
        const cartItems = state.cart.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        //xóa trong local storage
        localStorage.removeItem("cartItem");
        return { ...state, cart: { ...state.cart, cartItems } };
      }
      //xóa tất cả các sản phẩm
      case "CLEAR_ALL_ITEM": {
        //xóa trong local storage
        localStorage.removeItem("cartItem");
        return { ...state, cart: { cartItems: [] } };
      }

      // default
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
