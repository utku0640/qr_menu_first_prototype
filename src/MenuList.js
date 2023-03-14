import React from "react";
import { useGlobalContext } from "./Context";
function MenuList() {
  const { data, page } = useGlobalContext();
  return (
    <div className="container">
      <div className="card-container">
        {data[page].map((item, index) => {
          return (
            <div key={index} className="card">
              <h1>
                <span>{item.id + 1}-)</span>
                {item.name}
              </h1>
              <img src={item.image} alt={item.name} className="card-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuList;
