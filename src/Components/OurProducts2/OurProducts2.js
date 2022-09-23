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
    <div className="Ourproducts-container">
      <div className="container-fluid wrapper">
        <div className="part1 xx p7">
          <div>
            <div className="x1 text-white">
              <h3>Toilet Wares</h3>
            </div>
            <img src={toilet1} alt="toilet" className="toilet1" />
            <div className="r1">
              <div className="r2">
                <h2 className="fs-4 fw-bold bigProductID">
                  SQUARE FREESTANDING BATHTUB
                </h2>
                <div className="textAndArrowWrapper">
                  <p className="paragraphText">MMIXI350</p>
                  <a href="#">
                    <img src={arrow} alt="arrow" className="bigArrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xy xx1">
          <div className="part2 p7">
            <div className="xr">
              <div className="x1 text-white">
                <p className="paragraphText toiletWaresText">Toilet Wares</p>
              </div>
              <img src={toilet2} alt="toilet" className="toilet2" />
              <div className="r1">
                <div className="r5">
                  <h2 className="productID fw-bold mb-0 d-flex align-items-center">
                    RIMLESS WALL-HUNG TOILET
                  </h2>
                  <div className="r3 textAndArrowWrapper">
                    <p className="text-dark productCode paragraphText">
                      MMIXI350
                    </p>
                    <a href="#">
                      <img src={arrow} alt="arrow" className="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xr">
              <div className="x1 text-white">
                <p className="paragraphText toiletWaresText">Toilet Wares</p>
              </div>
              <img src={toilet3} alt="toilet" className="toilet3 " />
              <div className="r5">
                <h2 className=" fw-bold mb-0 d-flex align-items-center productID">
                  RIMLESS WALL-HUNG TOILET/RED
                </h2>
                <div className="r3 textAndArrowWrapper">
                  <p className="productCode paragraphText">MMIXI350</p>
                  <a href="#">
                    <img src={arrow} alt="arrow" className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xx xx1 xx3">
          <div className="part3 p7">
            <div className="xr">
              <div className="x1 text-white">
                <h3 className="toiletWaresText">Toilet Wares</h3>
              </div>
              <div>
                <img src={toilet4} alt="toilet" className="toilet4" />
                <div className="r5 infoWrapper py-3">
                  <h2 className="productID fw-bold mb-0 d-flex align-items-center font">
                    FLOOR BIDET
                  </h2>
                  <div className="textAndArrowWrapper">
                    <p className="paragraphText productCode fs-6">MMIXI350</p>
                    <a href="#">
                      <img src={arrow} alt="arrow" className="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xx xx1 d-flex justify-content-end">
          <div className="part4 p7 ">
            <div>
              <div className="xr">
                <div className="x1 text-white">
                  <h3 className="toiletWaresText">Toilet Wares</h3>
                </div>
                <div>
                  <img src={toilet5} alt="toilet" className="toilet5" />
                  <div className="r5 infoWrapper">
                    <h2 className=" fw-bold mb-0 d-flex align-items-center">
                      BACK TO WALL RIMLESS WC
                    </h2>
                    <div className="r3 textAndArrowWrapper">
                      <p className="paragraphText productCode fs-6">MMIXI350</p>
                      <a href="#">
                        <img src={arrow} alt="arrow" className="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xx xx1">
          <div className="part5 p7">
            <div>
              <div className="xr">
                <div className="x1 text-white">
                  <h3 className="toiletWaresText">Toilet Wares</h3>
                </div>
                <div style={{ width: "23rem" }}>
                  <img src={toilet6} alt="toilet" className="toilet6" />
                  <div className="r5 infoWrapper lastProductDetail">
                    <h4 className=" fw-bold mb-0 d-flex align-items-center productID w-50">
                      TERRAZZO CRAFT ABOVE COUNTER BASIN SERIES
                    </h4>
                    <div className="r3 textAndArrowWrapper ">
                      <p className="paragraphText productCode fs-6">MMIXI350</p>
                      <a href="#">
                        <img src={arrow} alt="arrow" className="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="motomartBackText"></div>
        <div className="d-flex justify-content-center pr">
          <button className="">OTHER PRODUCTS</button>
        </div>
      </div>

      <Foot />
    </div>
  );
}

export default OurProducts2;
