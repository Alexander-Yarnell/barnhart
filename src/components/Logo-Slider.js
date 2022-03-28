import React from "react";

import buckert from "../media/Buckert.png";
import kreutzer from "../media/base_logo_white_background.png";
import openDoor from "../media/open-door-custome-homes.png";

import "../css/logo-slider.css";

function LogoSlider() {
  return (
    <div>
      <h2>Our Builders</h2>
      <br />
      <div className="slider-logos">
        <a href="https://buckertcontracting.com/" target="_blank">
          <img className="item" src={buckert} />
        </a>
        <a
          href="https://www.jrussellcommunities.com/builder/kreutzer-homes-inc/"
          target="_blank"
        >
          <img className="item" src={kreutzer} />
        </a>
        <a href="https://www.opendoor.com/" target="_blank">
          <img className="item" src={openDoor} />
        </a>
      </div>
      <div className="slider">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ maxWidth: "300px" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="https://buckertcontracting.com/" target="_blank">
                <img src={buckert} className="d-block w-100" alt="..." />
              </a>
            </div>
            <div className="carousel-item">
              <a
                href="https://www.jrussellcommunities.com/builder/kreutzer-homes-inc/"
                target="_blank"
              >
                <img src={kreutzer} className="d-block w-100" alt="..." />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.opendoor.com/" target="_blank">
                <img src={openDoor} className="d-block w-100" alt="..." />
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;
