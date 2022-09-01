import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import text from "../img/head-text.png";

function Header() {
  return (
    <div>
      <div className="banner-bg container-fluid">
        <div>
          <Navbar />
          <br />
          <div className="d-flex"></div>
          <div className="banner-text">
            <div className="">
              <img src={text} alt="text_text" className="text_head" />
            </div>
          </div>
        </div>
        <div className="foot text-center">
          <h4 className="text-white d-flex ">
            AFFORDABLE LUXURY SANITARY WARES, DOORS,FUNITURES AND BUILDING
            MATERIALS.
          </h4>
          <button className="btn5 mt-3 text-white rounded">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
