import React from "react";
import "./FooterSection.css";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoFacebook } from "react-icons/bi";

const FooterSection = () => {
  return (
    <div className="Footer-Section-div">
      <div className="Footer-Section-parent-div">
        <div className="Footer-Section-content-parent-div">
          <div>
            <div className="Footer-section-child-div">
              <div>
                <img src="" alt="" />
              </div>
              <p>Copyright © 2020 Landify UI Kit.</p>
              <p>All rights reserved</p>
              <div className="Footer-section-child-icons-parent-div">
                <div>
                  <IoLogoTwitter />
                </div>
                <div>
                  <IoLogoLinkedin />
                </div>
                <div>
                  <BiLogoFacebook />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="Line"></div>
        <p>Copyright © 2021 Peush Jha</p>
      </div>
    </div>
  );
};

export default FooterSection;
