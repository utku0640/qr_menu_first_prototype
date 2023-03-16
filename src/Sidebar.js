import React, { useState } from "react";
import { VscListUnordered } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { HiOutlinePhoneIncoming } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import { FaBattleNet } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";

function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const isOpen = () => {
    setToggle(!toggle);
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="toggle-button">
          <button>
            <VscListUnordered onClick={() => isOpen()} />
          </button>
        </div>
        <div className="logo-div">
          <img src={logo} className="logo-image" />
        </div>
      </div>

      <div>
        <ul
          className={
            toggle
              ? "sidebar-list-div"
              : "sidebar-list-div active-sidebar-list-div"
          }
        >
          <a>
            <li>
              <FaBattleNet className="icon" />
              <Link to="/">Anasayfa</Link>
            </li>
          </a>
          <a>
            <li>
              <HiOutlinePhoneIncoming className="icon" />

              <Link to="/contact">İletişim</Link>
            </li>
          </a>
          <a>
            <li>
              <ImBlog className="icon" />
              <Link to="/blog">Blog</Link>
            </li>
          </a>
          <a>
            <li>
              <MdProductionQuantityLimits className="icon" />
              <Link to="/blog">Ürünlerimiz</Link>
            </li>
          </a>
          <a>
            <li>
              <FiLogIn className="icon" />
              <Link to="/blog">Log in</Link>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
