import React, { useEffect } from "react";
import "./MustHave_Section.css";
import { Button, Container } from "react-bootstrap";
import Chair from "./Components/Chair";
import Light from "./Components/Lights";
import Light2 from "./Components/Lights_2";
import Door from "./Components/Doors";
import Tub from "./Components/Tub";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MustHave() {
  useEffect(() => {
    gsap.fromTo(
      ".musthave--wrapper",
      {
        yPercent: 5,
        // opacity: 0,
        ease: "power2.easeIn",
      },
      {
        // opacity: 1,
        yPercent: 0,
        duration: 2,
        ease: "power2.easeIn",
        scrollTrigger: {
          trigger: ".musthave--wrapper",
          start: "top 95%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="musthave_container text-white">
      <div className="container-fluid">
        <div className="musthave--wrapper">
          <div className="row">
            <div className="musthaveTextChair" style={{ position: "relative" }}>
              <Chair />
            </div>
            <div className="lightWrapper " style={{ position: "relative" }}>
              <Light />
            </div>
            <div>
              <Light2 />
            </div>
            <div>
              <Chair />
            </div>
          </div>
          <div
            className="row section2InMusthave"
            style={{ position: "relative" }}
          >
            <div className="tubWrapper " style={{ position: "relative" }}>
              <Tub />
            </div>
            <div
              className="doorWrapperInMusthave"
              style={{ position: "relative" }}
            >
              <Door />
            </div>
          </div>
        </div>
      </div>
      <div className="btnWrapper">
        <Container className=" musthaveButton">
          <Button
            variant="bg-none"
            className="text-white musthaveBtn"
            style={{
              border: "0.8px solid white",
              padding: "5px 30px",
              fontSize: "30px",
              // position: "absolute",
            }}
          >
            {" "}
            Shop Now
          </Button>
        </Container>
      </div>
      {/* <div className="d-flex justify-content-center btnc">
            <button className="btn11 rounded">SHOP NOW</button>
          </div> */}
    </div>
  );
}

export default MustHave;
