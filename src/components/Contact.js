import React from "react";

import "../css/contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <form
          action="https://formsubmit.co/9de8834d4bbdd51b6db97255a045d78f"
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
      <a href="/contact">
        <button className="contact-button">Contact Us</button>
      </a>
    </div>
  );
}

export default Contact;
