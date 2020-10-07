import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setBasket,
  removeOneBasket,
  resetBasket,
  selectBasket,
} from "./basketSlice";

function Basket() {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        height: "40px",
        paddingLeft: "10px",
        paddingTop: "10px",
      }}
    >
      <button onClick={() => dispatch(setBasket({ basket: 1 }))}>
        addToCart
      </button>

      <button onClick={() => dispatch(removeOneBasket())}>removeOne</button>

      <button onClick={() => dispatch(resetBasket())}>Reset</button>
      <h2 style={{ marginTop: "-7px" }}>{basket}</h2>
    </div>
  );
}

export default Basket;
