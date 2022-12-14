import "./Luxury_Section.css";
import React, { useEffect } from "react";
import Chair from "./Components/Chair";
import sign from "../../Assets/img/sign.png";
import luxury_head_bg from "../../Assets/img/luxury-head-bg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Lux() {
  useEffect(() => {
    // console.log(ScrollTrigger);
    gsap.fromTo(
      ".gg",
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.3,
        duration: 3,
        ease: "power2.easeIn",
        scrollTrigger: {
          trigger: ".lux-container",
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="lux-container container-fluid py-5 ">
      <div className="gg">
        <img src={luxury_head_bg} alt="luxury" />
        <div className=" d-flex justify-content-center">
          <div className="d-flex row w-75 luxuryWrapper">
            <div className="col-6 d-md-flex justify-content-center align-items-center ">
              <img src={sign} alt="sign" className="sign" />
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <Chair />
            </div>
          </div>
        </div>
        <div className="bottom-text">
          <p>
            Motomart has a collection of LUXURY this is COMFORTABLE and
            AFFORDABLE for every home or office arrangement.
          </p>
          <button className="btn4 rounded" style={{ zIndex: "4" }}>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lux;
