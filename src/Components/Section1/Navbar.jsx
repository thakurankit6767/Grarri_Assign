import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="main_div">
      {/* Navbardiv_start */}
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
        {/* Navbardiv_end */}
        <div className="image_main_div">
          <div className="img_div1">
            <div className="img_div2">
              <p className="p1">Kokapet Terminal is the place to Be!</p>
              <p className="p2">
                Ideal for retail showrooms, office spaces, restaurants & cafes,
                gyms, clinics, diagnostics & other growing ventures
              </p>
            </div>
          </div>
           {/* address_div */}
        <div className="address_div"></div>
        </div>

       
      </div>
      {/* enquire_div */}
      <div className="enquire_div"></div>
    </div>
  );
};

export default Navbar;
