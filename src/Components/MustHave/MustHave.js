import React, { useEffect } from "react";
import "./MustHave.css";
import { Button, Container } from "react-bootstrap";
import Chair from "./Components/Chair";
import Light from "./Components/Lights";
import Door from "./Components/Doors";
import Tub from "./Components/Tub";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MustHave() {
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".l3",
  //     {
  //       yPercent: 30,
  //       // opacity: 0,
  //       ease: "power2.easeIn",
  //     },
  //     {
  //       // opacity: 1,
  //       yPercent: 0,
  //       duration: 2,
  //       ease: "power2.easeIn",
  //       scrollTrigger: {
  //         trigger: ".l2",
  //         start: "top 95%",
  //         scrub: 1,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="musthave_container text-white">
      <div className="container-fluid">
        <div className="">
          <div className="row">
            <div
              className="col-9 musthaveTextChair"
              style={{ position: "relative" }}
            >
              <Chair />
            </div>
            <div
              className="col-3 lightWrapper "
              style={{ position: "relative" }}
            >
              <Light />
            </div>
          </div>
          <div
            className="row section2InMusthave"
            style={{ position: "relative" }}
          >
            <div className="col-4 tubWrapper " style={{ position: "relative" }}>
              <Tub />
            </div>
            <div
              className="col-8 doorWrapperInMusthave"
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
