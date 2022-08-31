import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reducerCart";
const AuthContext = createContext();

//kho chứa các sản phẩm đã thêm và thông tin user
const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //hàm click đóng mở tab sidebar
  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };
  //hàm click đóng mở tab sidebar
  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };
  const values = { state, dispatch, openSidebar, closeSidebar };
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
