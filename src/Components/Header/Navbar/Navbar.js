import "./Navbar.css";
import React, { useRef, useEffect } from "react";
import motomart from "../../../Assets/img/motomart.png";
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { gsap } from "gsap";


function Navbar() {
  const navBar = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power4.easeOut" },
    })


    tl.fromTo(
      ".come",
      {
        opacity: 0,
        yPercent: -100,
      },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.6,
      }
    )
  }, [])

  return (
    <div className="navbar-wrapper container-fluid py-2" >
      <div className="row mt-3">
        <div className="col-lg-5 empty"></div>
        <div className="col-lg-7 full " ref={navBar}>
          <div className="d-md-flex align-items-end justify-content-between ">
            <img src={motomart} alt="motomart-logo"  className="motomart-logo come"/>
            <div className="navbar_links text-white pt-3 come">
              <a href="#">HOME</a>
              <a href="#all-product" className="text-center">ALL PRODUCTS</a>
              <a href="#contact">CONTACT</a>
            </div>
            <div className=" icons text-white d-flex come">
              <FiFacebook />
              <FiInstagram />
              <FiTwitter />
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
