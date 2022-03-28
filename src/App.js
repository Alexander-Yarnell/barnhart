import React from "react";

//components
import Nav from "./components/Nav";
import Map from "./components/Map";
import Card from "./components/Card";
import List from "./components/List";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Headshot from "./components/Headshot";
import Lightbox from "./components/Lightbox";
import InfoBlocks from "./components/InfoBlocks";
import LogoSlider from "./components/Logo-Slider";

//Css
import "./css/app.css";

function App() {
  return (
    <div>
      <Nav />
      <div className="app-container">
        <div className="contact-top">
          <Contact />
        </div>
        <div className="general-info">
          <Card title="General Information" text={<List />} />
        </div>
        <div className="map">
          <Lightbox />
        </div>
        <div className="school-text">
          <Card
            title="Schools"
            text="The Valley Center Elementary School District lets you decide where you would like your child to attend on a 1,2,3 ranking. They try to accomadate all parents wishes but as well make sure the school are filled equally through out the three schools. They do this in case you have a cousin or best friend in the same school district as your child, they can hopefully attend to the same elementary school."
          />
        </div>
        <div className="school-info">
          <InfoBlocks
            info1="Elementary Schools"
            info1text1="Abeliene: Pre K-3rd Grade"
            info1text2=" Wheatland: K-3rd Grade"
            info1text3="West: K-3rd Grade"
            info2="Intermediate"
            info2text="All 4th and 5th graders attende the Intermediate school for Valley Center School District."
            info3="Middle School"
            info3text="6th grade -8th grade"
            info4="High School"
            info4text="Freshman 9th grade - Senior 12th grade"
          />
        </div>
        <div className="headshot">
          <Headshot />
        </div>
        <div className="logo-slider">
          <LogoSlider />
        </div>
        <div className="contact-bottom">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
