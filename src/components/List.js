import React from "react";

import "../css/list.css";

function List() {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="item-name">Location :</div>
          <div className="item-description">93th and Oliver</div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Phase One :</div>
          <div className="item-description">
            Home Size starting at 1700sqft Main Floor for 1 story home. 2300sqft
            for 1.5 or 2 story home.
          </div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Phase Two :</div>
          <div className="item-description">
            Home Size starting at 1500sqft Main Floor for 1 story home. 2100sqft
            for 1.5 or 2 story home.
          </div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Builders :</div>
          <div className="item-description">
            Buckert Contracting, Kreutzer Homes, Relph Construction, Open Door
            Custom Homes Inc.
          </div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Schools :</div>
          <div className="item-description">Valley Center</div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Restrictions and Convenants :</div>
          <div className="item-description">Yes</div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Special Assessment :</div>
          <div className="item-description">Approximately $150/month</div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Utilities :</div>
          <div className="item-description">
            Septic System, Rural Water District #2, Energy Electric{" "}
          </div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Paved Roads :</div>
          <div className="item-description">Yes</div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Outbuildings Allowed :</div>
          <div className="item-description">Yes</div>
        </li>
      </ul>
    </div>
  );
}

export default List;
