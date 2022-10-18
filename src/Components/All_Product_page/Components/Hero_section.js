import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import sanitary_wares from "../Assets/sanitary--wares.png";
import toilet_red from "../Assets/_DSC9308 3.png";
import toilet_black from "../Assets/_DSC9308 black 1.png";
import toilet_blue from "../Assets/_DSC9308 blue.png";

function Hero_section() {
  const [toilet, setToilet] = useState(toilet_black);

  const selectToilet = (toilet) => {
    return setToilet(toilet);
  };
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        navigation={true}
        grabCursor={true}
        modules={[Navigation, Autoplay]}
        className="product-images-slider"
      >
        <SwiperSlide>
          <div className="container-fluid wrapper">
            <div className="row">
              <div className="col-6">
                <img src={sanitary_wares} alt="sanitary wares" height={210} />
                <h4 className="my-3" style={{ fontSize: "1.2rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum varius lacus nisl, non tincidunt sapien vehicula
                  in. Aliquam erat volutpat. Aliquam ante tortor, bibendum non
                  ullamcorper eget, sagittis vel diam. Vivamus pellentesque
                  lectus odio, at sagittis felis gravida sit amet. Proin vel
                  purus posuere, gravida justo non, ultricies arcu.
                </h4>
                <div className="">
                  <h4
                    className="text-uppercase my-4"
                    style={{ fontSize: "1.2rem" }}
                  >
                    colors
                  </h4>
                  <div className="d-flex justify-content-between w-25">
                    <div
                      className="black"
                      onClick={() => selectToilet(toilet_black)}
                    ></div>
                    <div
                      className="red"
                      onClick={() => selectToilet(toilet_red)}
                    ></div>
                    <div
                      className="blue"
                      onClick={() => selectToilet(toilet_blue)}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-6  d-flex justify-content-center align-items-end">
                <img src={`${toilet}`} alt="toilet" height={400} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid wrapper">
            <div className="row">
              <div className="col-6">
                <img src={sanitary_wares} alt="sanitary wares" />
                <h4 className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum varius lacus nisl, non tincidunt sapien vehicula
                  in. Aliquam erat volutpat. Aliquam ante tortor, bibendum non
                  ullamcorper eget, sagittis vel diam. Vivamus pellentesque
                  lectus odio, at sagittis felis gravida sit amet. Proin vel
                  purus posuere, gravida justo non, ultricies arcu.
                </h4>
                <div className="">
                  <h4 className="text-uppercase my-4">colors</h4>
                  <div className="d-flex justify-content-between w-25">
                    <div
                      className="black"
                      onClick={() => selectToilet(toilet_black)}
                    ></div>
                    <div
                      className="red"
                      onClick={() => selectToilet(toilet_red)}
                    ></div>
                    <div
                      className="blue"
                      onClick={() => selectToilet(toilet_blue)}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-6  d-flex justify-content-center align-items-end">
                <img src={`${toilet}`} alt="toilet" height={450} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero_section;
