import React from "react";
import { useGlobalContext } from "./Context";
import Button from "./Button";
function MenuList() {
  const { data, page, according_to_query_render_heading2 } = useGlobalContext();
  return (
    <>
      <div
        className={
          according_to_query_render_heading2() === "pastry"
            ? "container container-selected-pastry"
            : "container" && according_to_query_render_heading2() === "sweets"
            ? "container container-selected-sweets"
            : "container" && according_to_query_render_heading2() === "soups"
            ? "container container-selected-soups"
            : "container"
        }
      >
        <div className="card-container">
          <Button />
          {data[page].map((item, index) => {
            return (
              <div className="card">
                <div className="card-info">
                  <h1>
                    {item.name}
                    <span>{item.cost}</span>
                  </h1>
                </div>
                <img src={item.image} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MenuList;
