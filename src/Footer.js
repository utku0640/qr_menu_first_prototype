import React from "react";
import { FiFacebook } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer-container">
      <h1>Copyright ©{date}</h1>
      <div className="icon-social-media">
        <span>Muen Special</span>
        <a>
          <FiFacebook />
        </a>
        <a>
          <SiInstagram />
        </a>
        <a>
          <AiOutlineYoutube />
        </a>
      </div>
    </div>
  );
}

export default Footer;
