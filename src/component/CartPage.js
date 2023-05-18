import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";

function CartPage() {
  const cartData = useSelector((state) => state.cartData);
  return (
    <div>
      <Link to="/">Product List</Link>
      <h1>CartPage</h1>
      {cartData.map((e) => {
        console.log(e, "cart component");
        return (
          <div>
            <h1>{e.category}</h1>
            <img src={e.image} />
            <h4>${e.price}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
