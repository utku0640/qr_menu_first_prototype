import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { VscListUnordered } from "react-icons/vsc";
import { SiWelcometothejungle } from "react-icons/si";
import { FaBattleNet } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { BsQrCodeScan } from "react-icons/bs";

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
              <SiWelcometothejungle className="icon" />

              <Link onClick={() => setToggle(true)} to="/firstPage">
                Hoşgeldin Sayfası
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
              <BiMap className="icon" />
              <Link onClick={() => setToggle(true)} to="/map">
                Harita
              </Link>
            </li>
          </a>
          <a>
            <li>
              <BsQrCodeScan className="icon" />
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
