import React from 'react';

import '../css/headshot.css';

function Headshot(props) {
  return(
    <div>
      <img className="headshot"
      src={props.headshot}/>
      <img className="madrigal" src={props.madrigal}/>
    </div>
  )

}

export default Headshot;
