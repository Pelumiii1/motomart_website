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
      <div
        className=""
        style={{ padding: "30px 100px", marginBottom: "10rem" }}
      >
        <div
          className="product_head_wrapper"
          style={{
            backgroundColor: "white",
            width: "fit-content",
            borderTopRightRadius: "45px",
            borderTopLeftRadius: "45px",
            marginLeft: "150px",
            marginBottom: "-0.5%",
          }}
        >
          <h3
            className="text-uppercase products_head_text"
            style={{
              fontSize: "30px",
              padding: "20px 50px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Products
          </h3>
        </div>
        <div
          className="d-flex justify-content-center row gy-5  product_wrapper"
          style={{
            // padding: "20px",
            margin: "0px 150px",
            border: "8px solid white",
            paddingBottom: "50px",
            borderRadius: "2rem",
            borderTopLeftRadius: "0px",
            width: "fit-content",
            columnGap: "40px",
          }}
        >
          {Products.map((product) => (
            <div
              key={product.id}
              className="justify-content-between col-md-4 d-flex product_container"
              style={{
                border: "2px solid white",
                padding: "20px 40px",
                borderRadius: "20px",
                width: "fit-content",
                flexDirection: "column",
              }}
            >
              <div
                className="toilet_wares_wrapper"
                style={{
                  backgroundColor: "#D9D9D9",
                  width: "fit-content",
                  padding: "10px 30px",
                  borderRadius: "5px",
                }}
              >
                <h2
                  className="mb-auto text-uppercase text-white"
                  style={{ fontSize: "12px" }}
                >
                  Toilet wares
                </h2>
              </div>

              <div>
                <img
                  src={product.productImg}
                  className="product_img"
                  alt="motomart-toilet"
                  style={{
                    width: "20rem",
                    marginBottom: "5rem",
                    marginTop: "8rem",
                  }}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center product_ID">
                <div
                  className="d-flex w-100 justify-content-between align-items-center products_ID_container"
                  style={{
                    backgroundColor: "white",
                    width: "fit-content",
                    padding: "10px 20px",
                    borderRadius: "8px",
                  }}
                >
                  <div>
                    <h4
                      className="mb-auto fw-bold"
                      style={{
                        fontSize: "12px",
                        width: "10rem",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {product.name}
                    </h4>
                  </div>
                  <div className=" gap-2 d-flex align-items-center justify-content-center">
                    <div>
                      <h5 className="mb-auto" style={{ fontSize: "10px" }}>
                        MMIXI350
                      </h5>
                    </div>
                    <a href="#">
                      <img
                        src={arrow}
                        alt="arrow"
                        style={{ height: "1.5rem" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="d-flex justify-content-center btn_container"
            style={{ marginTop: "10rem" }}
          >
            <button className="text-uppercase btn2 text-dark rounded">
              Other Products
            </button>
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
