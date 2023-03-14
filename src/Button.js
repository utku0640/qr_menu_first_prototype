import React from "react";
import { useGlobalContext } from "./Context";
import pastry from "./pastry";
import sweets from "./sweets";
import soups from "./soups";

function Button() {
  const { changeQuery, increaseFunc, decreaseFunc, page, data } =
    useGlobalContext();
  return (
    <div className="btn">
      <button onClick={() => changeQuery(pastry)}>Pastry</button>
      <button onClick={() => changeQuery(sweets)}>Sweets</button>
      <button onClick={() => changeQuery(soups)}>Soups</button>
      <button onClick={increaseFunc}>+</button>
      {page + 1} / {data.length}
      <button onClick={decreaseFunc}>-</button>
    </div>
  );
}

export default Button;
