import React from "react";
import LOGO from "../../ASSETS/LOGO.png";
import "./NavBar.css";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="Navbar-section-div">
      <div className="Navbar-parent-div">
        <div>
          <img src={LOGO} alt="" />
        </div>
        <div className="Buttons-div">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div className="Last-button">Button Text</div>
        </div>
        <div className="Navbar-icon-div">
          <IoMdMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
