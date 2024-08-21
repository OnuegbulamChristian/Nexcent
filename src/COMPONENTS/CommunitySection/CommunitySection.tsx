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
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="Community-section-content-parent-div">
          <div className="Community-section-content-container1">
            <div>
              <div>
                <img src={cs1} alt="" />
              </div>
              <h3>Membership Organisations</h3>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div>
              <div>
                <img src={cs2} alt="" />
              </div>
              <h3>National Associations</h3>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="Community-section-content-container2">
            <div>
              <div>
                <img src={cs3} alt="" />
              </div>
              <h3>Clubs And Groups</h3>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
