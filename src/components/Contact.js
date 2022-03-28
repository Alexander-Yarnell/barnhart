import React from "react";

import "../css/contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <form
          action="https://formsubmit.co/dmadrigal@penfedrealty.com"
          method="POST"
        >
          <input
            className="first-name"
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />
          <input
            className="last-name"
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
          />
          <br /> <br /> <br />
          <input
            className="email"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <a className="contact"href="/contact">
        <button className="contact-button">Contact Us</button>
      </a>
    </div>
  );
}

export default Contact;
