import "./OurProducts2.css";
import React, { useEffect } from "react";
import Foot from "./Components/Foot";
import Products from "./Products";
import toilet1 from "../../Assets/img/toilet1.svg";
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
              <img
                src={toilet1}
                alt="motomart-toilet"
                style={{ width: "30rem" }}
              />
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
