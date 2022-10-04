import "./OurProducts2.css";
import React, { useEffect } from "react";
import Foot from "./Components/Foot";
import toilet1 from "../../Assets/img/toilet1.svg";
import toilet2 from "../../Assets/img/toilet2.svg";
import toilet3 from "../../Assets/img/toilet3.svg";
import toilet4 from "../../Assets/img/toilet4.svg";
import toilet5 from "../../Assets/img/toilet5.svg";
import toilet6 from "../../Assets/img/toilet6.svg";
import arrow from "../../Assets/img/arrow.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function OurProducts2() {
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".p7",
  //     {
  //       yPercent: 20,
  //     },
  //     {
  //       yPercent: 0,
  //       stagger: 0.5,
  //       duration: 4,
  //       ease: "power2.easeIn",
  //       scrollTrigger: {
  //         trigger: ".Ourproducts-container",
  //         start: "top 50%",
  //         end: "bottom 60%",
  //         scrub: 1,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section className="Ourproducts-container">
      <div className="" style={{ padding: "30px" }}>
        <div style={{ padding: "20px", border: "2px solid white" }}>
          <div
            className=""
            style={{
              border: "2px solid white",
              padding: "20px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                backgroundColor: "#D9D9D9",
                width: "fit-content",
                padding: "20px 40px",
              }}
            >
              <h2 className="text-uppercase text-white">Toilet wares</h2>
            </div>

            <div>
              <img src={toilet1} alt="motomart-toilet" />
            </div>

            <div className="d-flex" style={{ backgroundColor: "white" }}>
              <div>
                <h4>Product Name</h4>
              </div>
              <div className="d-flex">
                <p>MMIXI350</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Foot />
      </div>
    </section>
  );
}

export default OurProducts2;
