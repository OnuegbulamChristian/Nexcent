import React from "react";
import "./OurClients.css";
import logo1 from "../../ASSETS/logo1.png";
import logo2 from "../../ASSETS/logo2.png";
import logo3 from "../../ASSETS/logo3.png";
import logo4 from "../../ASSETS/logo4.png";
import logo5 from "../../ASSETS/logo1.png";
import logo6 from "../../ASSETS/logo1.png";
import logo7 from "../../ASSETS/logo2.png";
import Marquee from "react-fast-marquee";

const OurClients = () => {
  return (
    <div className="Our-clients-section-div">
      <div className="Our-clients-parent-div">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <Marquee>
          <div className="Our-clients-logo-parent-div">
            <div>
              <img src={logo1} alt="" />
            </div>
            <div>
              <img src={logo2} alt="" />
            </div>
            <div>
              <img src={logo3} alt="" />
            </div>
            <div>
              <img src={logo4} alt="" />
            </div>
            <div>
              <img src={logo5} alt="" />
            </div>
            <div>
              <img src={logo6} alt="" />
            </div>
            <div>
              <img src={logo7} alt="" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default OurClients;
