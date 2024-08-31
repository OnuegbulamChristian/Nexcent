import React from "react";
import "./FooterSection.css";
import footerlogo from "../../ASSETS/footerlogo.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="Footer-section-div">
      <div className="Footer-section-parent-div">
        <div className="Footer-content-div">
          <div>
            <div id="Footer-section-image-div">
              <img src={footerlogo} alt="" />
            </div>
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
            <div className="Footer-icons-div">
              <div>
                <FaTwitter id="Footer-icon" />
              </div>
              <div>
                <FaLinkedinIn id="Footer-icon" />
              </div>
              <div>
                <FaFacebookF id="Footer-icon" />
              </div>
            </div>
          </div>
          <div>
            <h5>COMPANY</h5>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Pricing</p>
            <p>How it works</p>
            <p>Docs</p>
          </div>
        </div>
        <div className="Footer-content-div">
          <div>
            <h5>RESOURCES</h5>
            <p>Help Center</p>
            <p>Term of Service</p>
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>See all resources</p>
          </div>
          <div>
            <h5>ABOUT</h5>
            <p>Terms & Conditions</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
      <hr />
      <p id="Copyright">Copyright © 2021 Peush Jha</p>
    </div>
  );
};

export default FooterSection;
