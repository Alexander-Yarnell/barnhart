import React from "react";

import '../css/contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form>
        <input className="first-name" type="text" placeholder="First Name" />
        <input className="last-name" type="text" placeholder="Last Name" /> <br/>
        <input className="email" type="text" placeholder="Email" /> <br/> 
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
