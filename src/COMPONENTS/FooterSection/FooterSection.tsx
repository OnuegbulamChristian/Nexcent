import React from "react";
import "./FooterSection.css";
import { PiGreaterThan } from "react-icons/pi";
import footerlogo from "../../ASSETS/footerlogo.png";

const FooterSection = () => {
  return (
    <div className="Footer-section-div">
      <div className="Footer-section-parent-div">
        <div className="Footer-section-content-parent-div">
          <div>
            <div>
              <div id="Footer-image-div">
                <img src={footerlogo} alt="" />
              </div>
              <p>Copyright © 2020 Landify UI Kit.</p>
              <p>All rights reserved</p>
              <div></div>
            </div>
            <div>
              <h3>Company</h3>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Pricing</p>
              <p>How it works</p>
              <p>Docs</p>
            </div>
          </div>
          <div>
            <div>
              <h3>Resources</h3>
              <p>Help Center</p>
              <p>Term of Service</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
              <p>See all resources</p>
            </div>
            <div>
              <h3>About</h3>
              <p>Terms & Conditions</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
        <div className="Line"></div>
        <p>Copyright © 2021 Peush Jha</p>
      </div>
    </div>
  );
};

export default FooterSection;
