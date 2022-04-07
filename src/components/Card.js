import React from "react";

import "../css/card.css";

function Card(props) {
  return (
    <div className="card-width">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">{props.text}
          <span>
        <a href={props.url}>{props.url}</a>
            .
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
