import React from "react";
import { useSelector } from "react-redux";
import ProductListItem from "../Header/ProductListItem";
import "../App.css";

export default function Carts() {
  const list = useSelector((state) => state.cart.list);
  console.log("123list",list)
  return (
    <div>
      <div className="Carterror">
        <h4>
          <i>Something went wrong</i>
        </h4>
        <h4>
          <i>Please check the internet...</i>
        </h4>
      </div>
      {list.map((item) => (
        <ProductListItem {...item} />
      ))}
    </div>
  );
}
