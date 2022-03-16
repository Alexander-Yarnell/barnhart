import React from "react";

//Import Css
import "../css/footer.css";

//Import Components
import Socials from "./Socials";

function Footer() {
  return (
    <div className="footer-bg">
      <div className="footer-title">Barnhart Estate</div>
      <div className="footer-email">dmadrigal@penfedrealty.com</div>
      <div href="tel:316-990-0184" className="footer-phone">316-990-0184</div>
      <div className="footer-socials">
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
