import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { VscListUnordered } from "react-icons/vsc";
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
          <button onClick={() => isOpen()}>
            <VscListUnordered />
          </button>
        </div>
        <div>
          <h1>Muen Special</h1>
        </div>
        {/* <div className="logo-div">
          <img src={logo} className="logo-image" />
        </div> */}
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
              <Link onClick={() => setToggle(true)} to="/">
                Anasayfa
              </Link>
            </li>
          </a>
          <a>
            <li>
              <HiOutlinePhoneIncoming className="icon" />

              <Link onClick={() => setToggle(true)} to="/menuList">
                İletişim
              </Link>
            </li>
          </a>
          <a>
            <li>
              <ImBlog className="icon" />
              <Link onClick={() => setToggle(true)} to="/blog">
                Blog
              </Link>
            </li>
          </a>
          <a>
            <li>
              <MdProductionQuantityLimits className="icon" />
              <Link onClick={() => setToggle(true)} to="/blog">
                Ürünlerimiz
              </Link>
            </li>
          </a>
          <a>
            <li>
              <FiLogIn className="icon" />
              <Link onClick={() => setToggle(true)} to="/qrCode">
                Qr Code
              </Link>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
