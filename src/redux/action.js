import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.log("action is called to add data", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("action remove from the cart", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = (data) => {
  console.log("action Empty cart ");
  return {
    type: EMPTY_CART,
    data,
  };
};
