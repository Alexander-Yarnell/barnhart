import React from "react";

import "../css/contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form>
        <input
          className="first-name"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          className="last-name"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <br /> <br /> <br />
        <input
          className="email"
          type="text"
          placeholder="Email"
          name="email"
        />{" "}
        <br />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
