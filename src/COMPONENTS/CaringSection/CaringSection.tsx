import React from "react";
import "./CaringSection.css";
import careimg from "../../ASSETS/careimg.png";

const CaringSection = () => {
  return (
    <div className="Caring-section-div">
      <div className="Caring-section-Parent-div">
        <h1>Caring is the new marketing</h1>
        <p>
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
        <div className="Caring-section-image-parent-div">
          <div>
            <div id="Caring-section-image-div">
              <img src={careimg} alt="" />
            </div>
            <div id="Caring-section-content-div">
              <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
              <button>Read More</button>
            </div>
          </div>
          <div>
            <div id="Caring-section-image-div">
              <img src={careimg} alt="" />
            </div>
            <div id="Caring-section-content-div">
              <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
              <button>Read More</button>
            </div>
          </div>
          <div>
            <div id="Caring-section-image-div">
              <img src={careimg} alt="" />
            </div>
            <div id="Caring-section-content-div">
              <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaringSection;
