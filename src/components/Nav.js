import React from "react";

//css
import "../css/nav.css";

//media
import logo from "../media/Barnhart Logo.png";
import facebook from "../media/facebook-square-brands.svg";
import instagram from "../media/instagram-square-brands.svg";
import tiktok from "../media/tiktok-brands.svg";
import twitter from "../media/twitter-square-brands.svg";
import youtube from "../media/youtube-square-brands.svg";

function Nav() {
  return (
    <div className="bg">
      <img className="logo" src={logo} />
      <div className="nav-info">
        <h2>316-990-0184</h2>
        <div className="social-container">
          <div className="socials">
            <a href="https://www.youtube.com" target="_blank">
              <img className="social-icons" src={youtube} />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <img className="social-icons" src={facebook} />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img className="social-icons" src={instagram} />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img className="social-icons" src={twitter} />
            </a>
            <a href="https://www.tiktok.com" target="_blank">
              <img className="social-icons" src={tiktok} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
