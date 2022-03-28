import React from "react";

import "../css/headshot.css";

//Media
import headshot from "../media/Dan Madrigal 0420 headshot - Copy.png";
import madrigal from "../media/Madrigal Team Gold Logo w bhhspfrlogo.png";

function Headshot() {
  return (
    <div className="headshot-container">
      <img className="headshot" src={headshot} />
      <a className="btn" href="https://madrigalteamgold.com/" target="_blank">
        <img className="madrigal" src={madrigal} />
      </a>
    </div>
  );
}

export default Headshot;
