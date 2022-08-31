import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import text from "../img/head-text.png"

function Header() {
  return (
    <div>
      <div className="banner-bg container-fluid">
        <div>
          <Navbar />
          <div className="d-flex"></div>
          <div className="banner-text">
            <div className="">
              <img src={text} alt="text_text" className="text_head"/>
            </div>
          </div>
          <div className="foot text-center">
            <h4 className="text-white d-flex ">
              AFFORDABLE LUXURY SANITARY WARES, DOORS,FUNITURES AND BUILDING
              MATERIALS.
            </h4>
            <button className="btn mt-3 p-2 text-white">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
