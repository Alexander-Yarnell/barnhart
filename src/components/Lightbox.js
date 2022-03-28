import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import map from "../media/BarnhartEstatesBaseMap.jpg";
import "../css/map.css";

function Lightbox() {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button  className="toggler" onClick={() => setToggler(!toggler)}>
        <FsLightbox toggler={toggler} sources={[`${map}`]} />
        <img className="map" src={map} />
      </button>
    </>
  );
}

export default Lightbox;
