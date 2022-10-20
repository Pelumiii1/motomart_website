import React from "react";
import "./MustHave_Section.css";
import { Button, Container } from "react-bootstrap";
import Chair from "./Components/Chair";
import Chair2 from "./Components/Chair_2";
import Light from "./Components/Lights";
import Light2 from "./Components/Lights_2";
import Wall from "./Components/Wall";
import Door from "./Components/Doors";
import Tub from "./Components/Tub";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MustHave() {
  return (
    <div className="musthave_container text-white">
      <div className="container-fluid">
        <div className="musthave--wrapper">
          <div className="d-flex">
            <div className="d-flex" style={{ position: "relative" }}>
              <Chair />
            </div>
            <div className="lightWrapper" style={{ position: "relative" }}>
              <Light />
            </div>
            <div className="light2-wrapper" style={{ width: "fit-content" }}>
              <Light2 />
            </div>
            <div>
              <Chair2 />
            </div>
          </div>
          <div className="section2InMusthave" style={{ position: "relative" }}>
            <div className="tubWrapper" style={{ position: "relative" }}>
              <Tub />
            </div>
            <div
              className="doorWrapperInMusthave "
              style={{ position: "relative" }}
            >
              <Door />
            </div>
            <div>
              <Wall />
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
            }}
          >
            Shop Now
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default MustHave;
