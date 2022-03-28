import React from "react";

import "../css/mcontact.css";

//Media
import backArrow from "../media/back-arrow.png";

function MContact() {
  return (
    <div className="outer-mcontact-container">
      <a href="/" className="back-arrow">
        <img className="back-arrow" src={backArrow} />
      </a>
      <div className="mcontact-container">
        <form
          action="https://formsubmit.co/9de8834d4bbdd51b6db97255a045d78f"
          method="POST"
        >
          <br />
          <br />
          <div className="contact-header">First Name</div>
          <input
            className="mfirst-name"
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />
          <br />
          <br />
          <div className="contact-header">Last Name</div>
          <input
            className="mlast-name"
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
          />
          <br />
          <br />
          <div className="contact-header">Email</div>
          <input
            className="memail"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <br />
          <br />
          <br />
          <button className="msubmit-btn" type="submit">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
      <div className="background">
        <div className="bg-color"></div>
        <div className="filter"></div>
      </div>
    </div>
  );
}

export default MContact;
