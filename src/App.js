import React from "react";

//components
import Nav from "./components/Nav";
import Map from "./components/Map";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Headshot from "./components/Headshot";

//Css
import "./css/website.css";

//Media
import headshot from "./media/Dan Madrigal 0420 headshot - Copy.jpg";
import madrigal from "./media/Madrigal Team Gold Logo w bhhspfrlogo.jpg";

function App() {
  return (
    <div>
      <Nav />
      <div className="app-container">
        <div className="contact">
          <Contact />
          <Card
            className="information"
            title="General Information"
            text="Location: 97th and Oliver
Home Size:
Phase 1: Starting at 1700sqft Main Floor for 1 story home. 2300sqft for 1.5 or 2 story home.
Phase 2: Starting at 1500sqft Main Floor for 1 story home. 2100sqft for 1.5 or 2 story home.
Builders: Buckert Contracting, Kreutzer Homes, Relph Construction, Open Door Custom Homes Inc
Schools: Valley Center
Restrictions and Covenants: Yes 
HOA: Yes, approximately $100-$200/year
Special Assessment: Approcimately $150/month
Utilities: Septic System, Rural Water District #2, Energy Electric 
Paved Roads 
Outbuildings allowed "
          />
          <Headshot className="headshot" headshot={headshot} madrigal={madrigal} />
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
