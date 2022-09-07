import React, { useRef, useEffect } from "react";
import "./MustHave.css";
import chair3 from "../../Assets/img/chair3.png";
import mustHave from "../../Assets/img/mustHave.png";
import tub from "../../Assets/img/tub.png";
import light from "../../Assets/img/light.png";
import musthave_foot from "../../Assets/img/musthave_foot.png";
import door2 from "../../Assets/img/door2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MustHave() {
  useEffect(() => {
    gsap.fromTo(
      ".l3",
      {
        yPercent: 30,
        opacity: 0,
        ease: "power2.easeIn",
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 2,
        ease: "power2.easeIn",
        scrollTrigger: {
          trigger: ".l2",
          start: "top 95%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="musthave_container text-white">
      <div className="container-fluid ps-4 l1 l2">
        <div className="">
          <div className="part11 row">
            <div className="col-md-6 d-md-flex text-center align-items-center l3">
              <img src={mustHave} alt="must have" className="musthave pe-3 " />
              <img src={chair3} alt="chair" className="chair3" />
            </div>
            <div className="col-md-6 w-25 g2 l3">
              <img src={light} alt="light" className="light l3" />
            </div>
          </div>
          <div className="part22 row d-md-flex text-center">
            <div className="col-md-6 text-center g4 l3">
              <img src={tub} alt="tub" className="tub" />
              <p className="tub-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tempus augue malesuada erat ultrices vulputate tempor et magna.
              </p>
            </div>
            <div className="col-md-6 d-md-flex d1 l3">
              <img src={door2} alt="door" className="door2" />
              <p className="door_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tempus augue malesuada erat ultrices vulputate tempor et magna.
                In hac habitasse platea dictumst. Morbi enim orci, bibendum sit
                amet massa sed.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center btnc">
            <button className="btn11 rounded">SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className="head6 w-100">
        <img src={musthave_foot} alt="foot" className="musthave_foot" />
      </div>
    </div>
  );
}

export default MustHave;
