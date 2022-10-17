import React, { useEffect } from "react";
import "./About_Motomart.css";
import Chair from "./Components/Chair";
import Basin from "./Components/Basin";
import Door from "./Components/Door";
import about_m from "../../Assets/img/about-m.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutMotomart() {
  useEffect(() => {
    gsap.fromTo(
      ".wrapper",
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
          trigger: ".p1-container",
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      className="aboutMotomartContainer"
      style={{ backgroundColor: "#462828" }}
    >
      <div className="container-fluid row wrapper">
        <div className="col-lg-6 section1InAboutMotomart">
          <div className="aboutMotomartTextWrapper">
            <img
              src={about_m}
              alt="about-motomart"
              className="aboutMotomartText"
            />
            <p
              className="text-white aboutMotomartSubtext"
              style={{
                fontFamily: "'Jacques Francois', serif",
                fontSize: "25px",
              }}
            >
              Motomart is the one-stop shop for affordable luxury sanitary
              wares, furniture, doors and building materials. The company is a
              wholly owned subsidiary of Sujimoto Construction.
            </p>
            <p
              className="text-white aboutMotomartSubtext"
              style={{
                fontFamily: "'Jacques Francois', serif",
                fontSize: "25px",
              }}
            >
              Our clientele consists of cultured individuals that appreciate
              rarified luxury, developers, contractors, construction companies
              and interior designer.
            </p>
          </div>
          <div className="doorWrapperInAboutMotomart">
            <Door />
          </div>
        </div>
        <div className="col-lg-6 section2InAboutMotomart">
          <div className="my-5">
            <Chair />
          </div>
          <div>
            <Basin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMotomart;
