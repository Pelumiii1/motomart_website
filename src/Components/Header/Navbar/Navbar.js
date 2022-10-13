import "./Navbar.css";
import React, { useEffect } from "react";
import { BsList } from "react-icons/bs";
import motomart from "../../../Assets/img/motomart.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { gsap } from "gsap";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Navbar() {
  // const navBar = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power4.easeOut" },
    });

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
    );
  }, []);

  return (
    // <div className="navbar-wrapper container-fluid py-2" >
    //   <div className="row mt-3">
    //     <div className="col-lg-5 empty"></div>
    //     <div className="col-lg-7 full " ref={navBar}>
    //       <div className="d-md-flex align-items-end justify-content-between ">
    //         <img src={motomart} alt="motomart-logo"  className="motomart-logo come"/>
    //         <div className="navbar_links text-white pt-3 come">
    //           <a href="#">HOME</a>
    //           <a href="#all-product" className="text-center">ALL PRODUCTS</a>
    //           <a href="#contact">CONTACT</a>
    //         </div>
    //         <div className=" icons text-white d-flex come">
    //           <FiFacebook />
    //           <FiInstagram />
    //           <FiTwitter />
    //         </div>
    //         <div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="d-flex row justify-content-end align-items-center my-3 ">
      <div className="col-lg-6 d-flex row justify-content-evenly navbar--wrapper">
        <div className="col-lg-3 navbar-logo ">
          <div className="w-100 d-flex justify-content-center">
            <img
              src={motomart}
              alt="motomart-logo"
              className="motomart-logo come"
            />
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle
              id="dropdown-custom-1"
              className="arrow-off text-white fs-4"
              style={{
                border: "none",
                content: "none",
                background: "transparent",
              }}
            >
              <BsList />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown--wrapper">
              <Dropdown.Item eventKey="1" className="drop-item">
                <a href="#" className=" text-dark text-decoration-none">
                  HOME
                </a>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" className="drop-item">
                <a
                  href="#all-product"
                  className=" text-dark text-decoration-none"
                >
                  ALL PRODUCTS
                </a>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" className="drop-item">
                <a href="#contact" className="text-dark text-decoration-none">
                  CONTACT
                </a>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                eventKey="4"
                className="d-flex justify-content-evenly icons--in--dropdown"
              >
                <FiFacebook />
                <FiInstagram />
                <FiTwitter />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>{" "}
        </div>
        <div className="d-flex col-9 justify-content-evenly align-items-center links--icons">
          <div
            className="d-flex justify-content-between w-50 text-white text-decoration-none"
            style={{ fontSize: "0.6rem" }}
          >
            <a
              href="#"
              className="text-white text-decoration-none navbar_links"
            >
              HOME
            </a>
            <a
              href="#all-product"
              className="text-white text-decoration-none navbar_links"
            >
              ALL PRODUCTS
            </a>
            <a
              href="#contact"
              className="text-white text-decoration-none navbar_links"
            >
              CONTACT
            </a>
          </div>
          <div className="icons d-flex gx-3 text-white">
            <a
              href="https://www.facebook.com/motomartNIG"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </a>
            <a
              href="https://www.instagram.com/motomart.ng/"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>
            <a
              href="https://twitter.com/motomartnig"
              className="text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
