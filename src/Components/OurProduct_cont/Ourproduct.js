import "./ourProduct.css";
import React, { useEffect } from "react";
import tap1 from "../../Assets/img/img1.png";
import tap2 from "../../Assets/img/img2.png";
import tap3 from "../../Assets/img/img3.png";
import tap4 from "../../Assets/img/img4.png";
import tap5 from "../../Assets/img/img5.png";
import tap6 from "../../Assets/img/img6.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function OurProduct() {
  useEffect(() => {
    // gsap.fromTo(
    //   ".l5",
    //   {
    //     yPercent: 50,
    //   },
    //   {
    //     yPercent: 0,
    //     stagger: 0.5,
    //     duration: 5,
    //     ease: "power2.easeIn",
    //     scrollTrigger: {
    //       trigger: ".our-product-container",
    //       start: "top 90%",
    //       end:"bottom 60%",
    //       scrub: 1,
    //     },
    //   }
    // );
  }, []);
  return (
    <div className="our-product-container d-flex container-fluid row justify-content-center">
      <div className="d-md-flex w-75 mb-5 pb-5">
        <div className="group1 grid1 text-white col-md-4 l5">
          <div>
            <img src={tap1} alt="tap" className="img1" />
            <p>MMSWIII38</p>
          </div>
          <div>
            <img src={tap2} alt="tap" className="img2" />
            <p className="text3 text-uppercase">MMSWIII41</p>
          </div>
        </div>
        <div className="group1 grid2 text-white col-md-4 l5">
          <div>
            <img src={tap3} alt="tap" className="img1" />
            <p className="pb-2">MMSWIII39</p>
          </div>
          <div>
            <img src={tap4} alt="tap" className="img2" />
            <p className="text3">MMSWIII42</p>
          </div>
        </div>
        <div className="group1 grid1 text-white col-md-4 l5">
          <div>
            <img src={tap5} alt="tap" className="img1"  />
            <p className="pb-2">MMSWIII40</p>
          </div >
          <div>
            <img src={tap6} alt="tap" className="img2" />
            <p className="text3">MMSWIII41</p>
          </div>
        </div>
          </div>
          <div className="d-flex justify-content-center btn1 mt-5">
          <button className="btn2 rounded text-white">OTHER PRODUCTS</button>
          </div>

    </div>
  );
}

export default OurProduct;
