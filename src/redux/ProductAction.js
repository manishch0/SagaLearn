import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

export const productItem = (data) => {
  //   let data = "hello";
  //   console.log("product action", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};

export const searchProucts = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};

// export const setPrdouctList = (data) => {
//   return {
//     type: SET_PRODUCT_LIST,
//     data,
//   };
// };
