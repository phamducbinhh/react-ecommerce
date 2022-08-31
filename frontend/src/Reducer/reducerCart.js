// giá trị khởi tạo
const initialState = {
  //tương tự như State : const [userInfo,setUserInfo]
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  cart: {
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: localStorage.getItem("paymentMethod")
      ? localStorage.getItem("paymentMethod")
      : "",
    //Lưu vào localStorage
    cartItems: localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [],
    //tương tự giống như dùng state : useState(JSON.parse(localStorage.getItem("cartItem") || [])
    //trạng thái mở tab sidebar close
    isSidebarOpen: false,
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
    //xóa tất cả trong cart khi thanh toán xong
    case "CART_CLEAR": {
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    }
    //đăng nhập tài khoản
    case "USER_SIGNIN": {
      //nếu case = "USER_SIGNIN" thì sẽ thực hiện hành động nào đó
      //lưu userInfo vào localStorage
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return { ...state, userInfo: action.payload };
    }
    //đăng xuất tài khoản
    case "USER_SIGNOUT": {
      //xóa luôn trong localStorage
      localStorage.removeItem("userInfo");
      //xóa luôn trong localStorage
      localStorage.removeItem("shippingAddress");
      //xóa luôn trong localStorage
      localStorage.removeItem("paymentMethod");
      return {
        ...state,
        userInfo: null,
        //xóa luôn trong cart sản phẩm của tài khoản
        cart: {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: "",
        },
      };
    }
    //lưu thông tin shippingAddress
    case "SAVE_SHIPPING_ADDRESS": {
      //lưu userInfo vào localStorage
      localStorage.setItem("shippingAddress", JSON.stringify(action.payload));
      //action.payload chính là các values từ hàm khi muốn submit
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };
    }
    // lưu thông tin paymentMethod
    case "SAVE_PAYMENT_METHOD": {
      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    }
    //close open toggle sidebar
    case "SIDEBAR_OPEN": {
      return { ...state, isSidebarOpen: true };
    }
    case "SIDEBAR_CLOSE": {
      return { ...state, isSidebarOpen: false };
    }
    // default
    default:
      return state;
  }
};
export { reducer, initialState };
