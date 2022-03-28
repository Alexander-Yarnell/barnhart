import React from "react";

import "../css/infoblocks.css";

function InfoBlocks(props) {
  return (
    <div className="block-container">
      <div className="block-item">
        <h2>{props.info1}</h2>
        <p>{props.info1text1}</p>
        <p>{props.info1text2}</p>
        <p>{props.info1text3}</p>
      </div>
      <div className="block-item">
        <h2>{props.info2}</h2>
        <p>{props.info2text}</p>
      </div>
      <div className="block-item">
        <h2>{props.info3}</h2>
        <p>{props.info3text}</p>
      </div>
      <div className="block-item">
        <h2>{props.info4}</h2>
        <p>{props.info4text}</p>
      </div>
    </div>
  );
}

export default InfoBlocks;
