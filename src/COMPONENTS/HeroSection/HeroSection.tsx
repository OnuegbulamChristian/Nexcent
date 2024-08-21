import React from "react";
import "./HeroSection.css";
import HeroImage from "../../ASSETS/HeroSection Image.png";

const HeroSection = () => {
  return (
    <div className="Hero-section-div">
      <div className="Hero-section-parent-div">
        <div className="Container1">
          <h1>Lessons and insights</h1>
          <h2>from 8 years</h2>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button>Register</button>
        </div>
        <div className="Container2">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
