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
      <div className="container-fluid ps-4 l1 l2 d-flex align-items-center">
        <div className="">
          <div className="part11 row">
            <div className="col-md-6 d-md-flex text-center align-items-center l3 text--chair">
              <Chair />
            </div>
            <div className="col-md-6 w-md-25 g2 l3 light-wrapper">
              <Light />
            </div>
          </div>
          <div className="part22 row d-md-flex text-center">
            <div className="col-md-6 text-center g4 l3 tub-wrapper">
              <Tub />
            </div>
            <div className="col-md-6 d-md-flex d1 l3 door-wrapper">
              <Door />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Container className="py-5 mt-3 d-flex align-items-center justify-content-center">
          <Button
            variant="bg-none"
            className="text-white"
            style={{
              border: "1px solid white",
              padding: "10px 40px",
              position: "absolute",
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
