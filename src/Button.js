import React from "react";
import { useGlobalContext } from "./Context";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Button() {
  const {
    according_to_query_render_heading,
    increaseFunc,
    decreaseFunc,
    page,
    data,
  } = useGlobalContext();

  return (
    <>
      <div className="btn">
        <div className="btn-inc-dec">
          <button onClick={increaseFunc}>+</button>
          <span>
            {page + 1} / {data.length}
          </span>
          <button onClick={decreaseFunc}>-</button>
        </div>
        <div className="btn-home">
          <Link to="/">
            <AiOutlineHome />
          </Link>
        </div>
      </div>
      <div className="button-heading">
        <h1 className="query-heading">{according_to_query_render_heading()}</h1>
      </div>
    </>
  );
}

export default Button;

{
  /* <div className="btn-inc-dec">
  <button onClick={increaseFunc}>+</button>
  <span>
    {page + 1} / {data.length}
  </span>
  <button onClick={decreaseFunc}>-</button>
</div> */
}
