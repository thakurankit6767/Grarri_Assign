import React from "react";
import logo from "../Images/RLogowhite.svg";
import logoword from "../Images/TRUSTINVESTPROFIT.svg";
import logogold from "../Images/rlogogold.svg";
import heroimage from "../Images/Hero_image_page.svg";

import "./nav.css";

const Nav = () => {
  return (
    <div>
      <div className="main_div1">
        <div className="navbar_main_div">
          <div className="navbar_div">
            <div className="logo_div">
              <img className="logoimage" src={logo} alt="logo" />
              <img className="logoword" src={logoword} alt="logoword" />
            </div>
            <div className="li_div">
              <ul className="ul_div">
                <li>About</li>
                <li>Amenities</li>
                <li>Features</li>
                <li>Gallery</li>
                <li>Nearby Places</li>
                <li>Project Status</li>
                <li>Location</li>
              </ul>
            </div>
          </div>

          <div className="imagediv">
            <img src={heroimage} alt="heroimage" />
          </div>
          <div className="addressdiv"></div>
        </div>

        <div className="enquire_div">
          <p className="enquire">Enquire Now</p>
          <img className="logogold" src={logogold} alt="" />
          <div className="input-div">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email ID" />
            <input type="text" placeholder="Enter your phone number" />
            <div className="budget">
              <p>Choose budget</p>
              <div>
                <form action="">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   <label for="html">1 Cr - 1.5 Cr</label>
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                   <label for="css">1.5 Cr - 2 Cr</label>
                  <input
                    type="radio"
                    id="javascript"
                    name="fav_language"
                    value="JavaScript"
                  />
                    <label for="javascript">2 Cr+</label>
                </form>
              </div>
            </div>
            <div className="timetomeet">
              <p>Preferred time to meet</p>
              <div>
                <form action="">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   <label for="html">9AM - 12PM</label>
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                   <label for="css">12AM - 3PM</label>
                  <input
                    type="radio"
                    id="javascript"
                    name="fav_language"
                    value="JavaScript"
                  />
                    <label for="javascript">3PM - 6PM</label>
                </form>
                <button className="submit_button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
