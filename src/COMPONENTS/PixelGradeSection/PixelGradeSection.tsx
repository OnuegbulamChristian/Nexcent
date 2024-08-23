import React from "react";
import "./PixelGradeSection.css";
import pximage from "../../ASSETS/pximage.png";

const PixelGradeSection = () => {
  return (
    <div className="Pixel-grade-section-div">
      <div className="Pixel-grade-parent-div">
        <div className="Pixel-grade-container1">
          <div>
            <img src={pximage} alt="" />
          </div>
        </div>
        <div className="Pixel-grade-container2">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quos
            repellendus ad soluta laborum dolorum quaerat placeat facilis
            explicabo delectus fuga eveniet, officia distinctio molestiae
            inventore rem labore commodi error?
          </p>
          <button>Button Text</button>
        </div>
      </div>
    </div>
  );
};

export default PixelGradeSection;
