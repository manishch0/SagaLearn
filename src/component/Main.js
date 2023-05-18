import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { productItem } from "../redux/ProductAction";
import { useEffect, useState } from "react";
import { productList } from "../redux/ProductReducer";
import "./Main.css";
import Header from "./Header";

function Main() {
  const data = useSelector((state) => state.productList);
  console.log(data, "in main component api call data ");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productItem());
  }, []);
  return (
    <div>
      {data.map((e) => {
        console.log(e, "in map function call");
        return (
          <div key={e.id}>
            <h1>{e.category}</h1>
            <img src={e.image} />
            <h4>${e.price}</h4>
            <button
              onClick={() => {
                dispatch(addToCart(e));
              }}
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                dispatch(removeFromCart(e.id));
              }}
            >
              Remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Main;

{
  /* <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          dispatch(removeFromCart(product.name));
        }}
      >
        Remove form cart
      </button>
      <button
        onClick={() => {
          dispatch(emptyCart(product));
        }}
      >
        Empty Cart
      </button> */
}
{
  /* <button
        onClick={() => {
          dispatch(productItem());
        }}
      >
        Product list
      </button> */
}
