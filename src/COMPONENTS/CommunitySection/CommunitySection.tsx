import React from "react";
import "./CommunitySection.css";
import cs1 from "../../ASSETS/cs1.png";
import cs2 from "../../ASSETS/cs2.png";
import cs3 from "../../ASSETS/cs3.png";

const CommunitySection = () => {
  return (
    <div className="Community-section-div">
      <div className="Community-section-parent-div">
        <h1>Manage your entire community in a single system</h1>
        <p id="Community-section-p_tag">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="Community-section-content-parent-div">
          <div className="Comunity-section-container1">
            <div className="Community-section-content-div">
              <div className="Community-section-content-image-div">
                <img src={cs1} alt="" />
              </div>
              <h2>Membership Organisations</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="Community-section-content-div">
              <div className="Community-section-content-image-div">
                <img src={cs2} alt="" />
              </div>
              <h2>Membership Organisations</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="Community-section-content-div">
            <div className="Community-section-content-image-div">
              <img src={cs3} alt="" />
            </div>
            <h2>Membership Organisations</h2>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
