import React from "react";
import "./HelpSection.css";
import help1a from "../../ASSETS/help1a.png";
import help1b from "../../ASSETS/help1b.png";
import help2a from "../../ASSETS/help2a.png";
import help2b from "../../ASSETS/help2b.png";

const HelpSection = () => {
  return (
    <div className="Help-section-div">
      <div className="Help-section-parent-div">
        <div className="Help-section-container1">
          <h1>Helping a local</h1>
          <h2>business reinvent itself</h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="Help-section-container2">
          <div className="Help-section-container2-child1">
            <div>
              <div id="Help-image-div">
                <img src={help1a} alt="" />
              </div>
              <div id="Help-content-div">
                <h3>2,245,341</h3>
                <p>Members</p>
              </div>
            </div>
            <div>
              <div id="Help-image-div">
                <img src={help1b} alt="" />
              </div>
              <div id="Help-content-div">
                <h3>828,867</h3>
                <p>Event Bookings</p>
              </div>
            </div>
          </div>
          <div className="Help-section-container2-child2">
            <div>
              <div id="Help-image-div">
                <img src={help2a} alt="" />
              </div>
              <div id="Help-content-div">
                <h3>46,328</h3>
                <p>Clubs</p>
              </div>
            </div>
            <div>
              <div id="Help-image-div">
                <img src={help2b} alt="" />
              </div>
              <div id="Help-content-div">
                <h3>1,926,436</h3>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
