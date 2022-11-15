import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <div className="main_div1">
        <div className="navbar_main_div">
          <div className="navbar_div">
            <div className="r_logo"></div>
            <div className="logo_word">
              {/* <img src="../../../public/Images/TRUSTINVESTPROFIT.svg" alt="" /> */}
            </div>
            <div className="li_div">
              <ul className="ul_div">
                <li className="li_one">About</li>
                <li className="li_two">Amenities</li>
                <li className="li_three">Features</li>
                <li className="li_four">Gallery</li>
                <li className="li_five">Nearby Places</li>
                <li className="li_six">Project Status</li>
                <li className="li_seven">Location</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
