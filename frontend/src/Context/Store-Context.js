import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reducerCart";
const AuthContext = createContext();

//kho chứa các sản phẩm đã thêm và thông tin user
const StoreProvider = (props) => {
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
