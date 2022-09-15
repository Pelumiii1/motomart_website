import React, { useEffect } from "react";
import "./about-motomart.css";
import Chair from './Components/Chair'
import Basin from './Components/Basin'
import Door from './Components/Door'
import about_m from "../../Assets/img/about-m.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutMotomart() {
  useEffect(() => {
    gsap.fromTo(
      ".l4",
      {
        xPercent: 30,
        // opacity: 0,
      },
      {
        // opacity: 1,
        xPercent: 0,
        stagger: 0.3,
        duration: 3,
        ease: "power2.easeIn",
        scrollTrigger: {
          trigger: ".p1-container",
          start: "top 90%",
          end:"bottom 60%",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <div className="p1-container container-fluid ">
      <div className="row d-flex">
        <div className="text7 p-xs-3 ps-md-5 mt-5 pt-5 col-md-6 text-white l4">
          <img
            src={about_m}
            alt="about-motomart"
            className="about_motomart pb-5 "
          />
          <p className="text2 ">
            Motomart is the one-stop shop for affordable luxury sanitary wares,
            furniture, doors and building materials. The company is a wholly
            owned subsidiary of Sujimoto Construction.
          </p>
          <p className="text2">
            Our clientele consists of cultured individuals that appreciate
            rarified luxury, developers, contractors, construction companies and
            interior designer.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center l4">
          <Chair />
        </div>
      </div>
      <div className="d-flex row s-2 ">
        <div className="col-md-6 text-center s-1 l4">
          <Door />
          
        </div>
        <div className="col-md-6 d-flex justify-content-center f1 l4">
          <Basin />
          
        </div>
      </div>
    </div>
  );
}

export default AboutMotomart;
