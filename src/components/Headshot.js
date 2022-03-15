import React from "react";

import "../css/headshot.css";

function Headshot(props) {
  return (
    <div className="container">
      <img className="headshot" src={props.headshot} />
      <a className="btn" href="https://madrigalteamgold.com/" target="_blank">
        <img className="madrigal" src={props.madrigal} />
      </a>
    </div>
  );
}

export default Headshot;
