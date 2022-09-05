import "./Lux.css";
import React, { useRef, useEffect } from "react";
import chair2 from "../img/chair2.png";
import sign from "../img/sign.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Lux() {
  useEffect(() => {
    // console.log(ScrollTrigger);
    gsap.fromTo(
      ".l6",
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
          // markers:true,
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <div className="lux-container container-fluid py-5 ">
      <div className="">
        <div className=" d-flex justify-content-center ">
          <div className="d-flex row w-75 alig l6">
            <div className="col-6 d-md-flex justify-content-center align-items-center ">
              <img src={sign} alt="sign" className="sign" />
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={chair2} alt="chair" className="lux-chair" />
            </div>
          </div>
        </div>
        <div className="bottom-text">
          <p>
            Motomart has a collection of LUXURY this is COMFORTABLE and
            AFFORDABLE for every home or office arrangement.
          </p>
          <button className="btn4 rounded">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Lux;
