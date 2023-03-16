import React from "react";
import { useGlobalContext } from "./Context";

function Button() {
  const {
    changeQuery,
    increaseFunc,
    decreaseFunc,
    page,
    data,
    pastry,
    sweets,
    soups,
  } = useGlobalContext();
  return (
    <div className="btn">
      <div className="btn-inc-dec">
        <button onClick={increaseFunc}>+</button>
        {page + 1} / {data.length}
        <button onClick={decreaseFunc}>-</button>
      </div>
      <div className="btn-query">
        <button onClick={() => changeQuery(pastry)}>Pastry</button>
        <button onClick={() => changeQuery(sweets)}>Sweets</button>
        <button onClick={() => changeQuery(soups)}>Soups</button>
      </div>
    </div>
  );
}

export default Button;
