import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import text from "../img/head-text.png";
import { gsap } from "gsap";

function Header() {
  const heroText = useRef(null);
  const heroFoot = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "power2.easeIn" },
    });

    tl.fromTo(
      ".banner-text",
      {
        opacity: 0,
        yPercent: -30,
      },
      {
        opacity: 1,
        yPercent: 0,
      }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "power4.easeOut" },
    });

    tl.fromTo(
      ".foot",
      {
        opacity: 0,
        yPercent: 30,
      },
      {
        opacity: 1,
        yPercent: 0,
      }
    );
  }, []);



  return (
    <div>
      <div className="banner-bg  container-fluid">
        <div>
          <Navbar />
          <br />
          <div className="d-flex"></div>
          <div className="banner-text" ref={heroText}>
            <div className="">
              <img src={text} alt="text_text" className="text_head" />
            </div>
          </div>
        </div>
        <div className="foot text-center" ref={heroFoot}>
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
