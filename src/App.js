import React from "react";

//components
import Nav from "./components/Nav";
import Map from "./components/Map";
import Card from "./components/Card";
import List from "./components/List";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Headshot from "./components/Headshot";

//Css
import "./css/website.css";

//Media
import headshot from "./media/Dan Madrigal 0420 headshot - Copy.jpg";
import madrigal from "./media/Madrigal Team Gold Logo w bhhspfrlogo.jpg";
import buckert from "./media/Buckert.png";

function App() {
  return (
    <div>
      <Nav />
      <div className="app-container">
        <div className="left-column">
          <Contact />
          <Card
            className="information"
            title="General Information"
            text={<List />}
          />
        </div>
        <div className="right-column">
          <Map />
        </div>
      </div>
      <div className="about-us">
        <div className="headshot-container">
          <Headshot headshot={headshot} madrigal={madrigal} />
        </div>
        <div className="info-container">
          <Card
            className="information"
            title="About Us"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper tortor ac eros porttitor, vel fringilla massa rhoncus. Suspendisse dapibus pulvinar gravida. Maecenas enim nulla, ornare a efficitur pulvinar, molestie eu risus. Maecenas id tristique turpis. Curabitur sit amet ligula id est elementum posuere quis vel tellus. Duis aliquam leo sed mollis placerat. Nulla semper, libero et tincidunt sagittis, eros felis vehicula sem, ut mollis eros diam sit amet ipsum."
          />
        </div>
        <div className="builders-container">
          <a href="https://buckertcontracting.com/" target="_blank">
            <img className="builders-img" src={buckert} />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
