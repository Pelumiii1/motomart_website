import React, { useRef, useEffect } from "react";
import Icons from "./Icons";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import text from "../../Assets/img/head-text.png";
import { gsap } from "gsap";

function Header() {
  const heroText = useRef(null);
  const heroFoot = useRef(null);

  // const iconsImg = Icons.map((icon){})

  // console.log(iconImg);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.3, ease: "power2.easeIn" },
    });

    tl.fromTo(
      ".banner-text",
      {
        opacity: 0,
        yPercent: -30,
      },
      {
        opacity: 1,
        yPercent: 0,
      }
    );
    tl.fromTo(
      ".foot",
      {
        opacity: 0,
        yPercent: 30,
      },
      {
        opacity: 1,
        yPercent: 0,
      }
    );
  }, []);

  return (
    <div>
      <div className="banner-bg  container-fluid">
        <div>
          <Navbar />
          <br />
          <div className="d-flex"></div>
          <div className="banner-text" ref={heroText}>
            <div className="">
              <img
                src={text}
                alt="text_text"
                className="text_head"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className="circle"></div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="foot" ref={heroFoot}>
          <div className="icons-wrapper">
            <div className="">
              <div className="d-flex text-white align-items-center justify-content-between">
                {Icons.map((icon) => (
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      src={icon.icon}
                      alt="icons"
                      height={70}
                      width={70}
                      className="icon--img"
                    />
                    <p className="fs-md-6 ff">{icon.name}</p>
                  </div>
                ))}
                {/* <img src="" alt="sanitary-wares" />
                <p>Sanitary Wares</p> */}
              </div>
            </div>
          </div>
          <button className="btn5 mt-3 text-white rounded">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
