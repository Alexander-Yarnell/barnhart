import React from "react";

//components
import Nav from "./components/Nav";
import Map from "./components/Map";
import Card from "./components/Card";
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
            text="Location: 97th and Oliver"
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
            title="General Information"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sagittis eros. Sed varius ullamcorper aliquam. Sed tincidunt mauris vitae mauris hendrerit, nec aliquam dolor commodo. Morbi id risus porttitor urna mollis accumsan. Aliquam venenatis risus ac interdum ultrices. Duis euismod et dolor ut aliquam. Praesent volutpat pulvinar ipsum, in rhoncus est ornare vel. Vivamus tincidunt lectus at felis pulvinar, varius sodales nisi tempor. Fusce dictum pretium porta. Mauris varius urna vitae orci feugiat, non tempus nisi placerat. Phasellus maximus diam sem, vitae volutpat mi lacinia ac. Curabitur tristique sollicitudin velit vel eleifend. Aliquam vel massa rhoncus, feugiat diam eget, finibus justo.  "
          />
        </div>
        <div className="builders-container">
          <a href="">
            <img className="builders-img" src={buckert} />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
