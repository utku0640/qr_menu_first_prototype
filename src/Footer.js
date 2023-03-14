import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer-container">
      <h1>Copyright ©{date}</h1>
    </div>
  );
}

export default Footer;
