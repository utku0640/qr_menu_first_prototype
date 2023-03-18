import React from "react";
import MenuData from "./data/menuData";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";

function Menu() {
  const { changeQuery } = useGlobalContext();
  return (
    <div className="container-menu">
      <div className="menu-card">
        {MenuData.map((item, index) => {
          return (
            <>
              <Link to="/menulist">
                <div
                  key={index}
                  className="single-card"
                  onClick={() => changeQuery(item.forQuery)}
                >
                  <div>
                    <img src={item.image} className="item-image" />
                  </div>
                  <h1 className="item-name">{item.name}</h1>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
