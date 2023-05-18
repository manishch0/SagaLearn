import React from "react";
import Image from "./cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProucts } from "../redux/ProductAction";

function Header() {
  const result = useSelector((state) => state.cartData);
  console.log("called data in header", result);
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <h1>Shopping site</h1>
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => {
            dispatch(searchProucts(e.target.value));
          }}
        />
      </div>
      <Link to="/cart">
        <div>
          <span>{result.length}</span>
          <img src={Image} />
        </div>
      </Link>
    </div>
  );
}

export default Header;
