import React from "react";

//images
import map from "../media/BarnhartEstatesBaseMap.jpg";

//Css
import "../css/map.css";

function Map() {
  return (
    <div>
      <img className="map" src={map} />
    </div>
  );
}

export default Map;
