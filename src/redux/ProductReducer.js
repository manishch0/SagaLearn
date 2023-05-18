import { act } from "react-dom/test-utils";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productList = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   console.log("Product list reducer called", action);
    //   return [action.data];
    case SET_PRODUCT_LIST:
      console.log("saga api data reducers", action);
      return [...action.data];
    default:
      return data;
  }
};
