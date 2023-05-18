import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.log("reducer is called", action);
  //     return action.data;
  //   } else return "action does not match";

  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD to cart", action);
      return [action.data, ...data];
    // break;
    case REMOVE_FROM_CART:
      console.log("Remove from the cart reducer called", action);
      // data.length = data.length? data.length - 1:[];
      // upper line ko use krte h jb hum ko data emove krna ho cart mai se redux ki help se
      const remainingItem = data.filter((e) => e.id !== action.data);
      console.log("reming item check in reducer", remainingItem);
      return [...remainingItem];
    // break;
    case EMPTY_CART:
      console.log("Empty cart remove data from the cart", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
