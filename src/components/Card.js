import React from "react";

import "../css/card.css";

function Card(props) {
  return (
    <div className="card-width">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;