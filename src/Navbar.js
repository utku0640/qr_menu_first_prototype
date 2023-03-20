import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-div">
        <img src={logo} className="logo-image" />
      </div>
      <div>
        <ul className="list-div">
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/menu">İletişim</Link>
          </li>
          <li>
            <Link to="/map">Harita</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
