import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productList } from "./ProductReducer";

export default combineReducers({
  cartData,
  productList,
});
