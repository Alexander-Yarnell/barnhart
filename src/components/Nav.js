import React from "react";

//css
import "../css/nav.css";

//Import Media
import logo from "../media/Barnhart Logo.png";

function Nav() {
  return (
    <div className="bg">
      <img className="nav-logo" src={logo} />
      <div className="nav-info">
        <h2 href="tel:316-990-0184" >316-990-0184</h2>
      </div>
    </div>
  );
}

export default Nav;
