import React from "react";

import "../css/list.css";

function List() {
  return (
    <div>
      <ol className="list-group">
        <li className="list-group-item">
          <div className="item-name">Location</div>
          <p className="item-description">97th and Oliver</p>
        </li>
        <li className="list-group-item">
          <div className="item-name">Home Size</div>
        </li>
        <li className="list-group-item">
          <div className="item-name">Phaze One</div>
          <p className="item-description">
            Starting at 1700sqft Main Floor for 1 story home. 2300sqft for 1.5
            or 2 story home.
          </p>
        </li>
        <li className="list-group-item">
          <div className="item-name">Phaze Two</div>
          <p className="item-description">
            Starting at 1500sqft Main Floor for 1 story home. 2100sqft for 1.5
            or 2 story home.
          </p>
        </li>
        <li className="list-group-item">
          <div className="item-name">Builders</div>
          <p className="item-description">
            Buckert Contracting, Kreutzer Homes, Relph Construction, Open Door
            Custom Homes Inc
          </p>
        </li>
        <li className="list-group-item">
          <div className="item-name">Schools</div>
          <p className="item-description">Valley Center</p>
        </li>
        <li className="list-group-item">
          <div className="item-name">Restrictions and Convenants</div>
          <p className="item-description">Yes</p>
        </li>
        <li className="list-group-item">
          <div className="item-name">Special Assessment</div>
          <p className="item-description">Approcimately $150/month</p>
        </li>
        <li className="list-group-item">
          <div className="item-name">Utilities</div>
          <p className="item-description">
            Septic System, Rural Water District #2, Energy Electric{" "}
          </p>
        </li>
        <li className="list-group-item">
          <div className="item-name">Paved Roads</div>
          <p className="item-description">Yes</p>
        </li>
        <li className="list-group-item">
          <div className="item-name">Outbuildings Allowed</div>
          <p className="item-description">Yes</p>
        </li>
      </ol>
    </div>
  );
}

export default List;
