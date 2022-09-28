import "./Footer.css";
import motomart from "../../Assets/img/motomart.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import FloatingWhatsApp from "react-floating-whatsapp";

function Footer() {
  return (
    <div className="footer-container p-3 container-fluid" id="contact">
      <FloatingWhatsApp
        style={{ zIndex: "10000" }}
        className="whatsapp"
        phoneNumber="+2348039999989"
        accountName="Motomart Careline"
        allowClickAway={true}
        statusMessage="Typically replies within 5 mins"
        // avatar={CustomerSupportAvatar}
      />
      <div className="d-flex row justify-content-evenly px-5 py-3 align-items-center ">
        <div
          className="col-md-6 col-xs-12 gy-xs-3 f4 "
          style={{ width: "40rem" }}
        >
          <div className=" row l3">
            <div className="col-md-6 ll">
              <img
                src={motomart}
                alt="motomart-logo"
                className="motomart-logo"
              />
            </div>

            <div className="icons text-white d-flex col-md-6 align-items-end justify-content-evenly fs-4 ">
              <a href="#" className="text-white">
                <FiFacebook />
              </a>
              <a href="#" className="text-white">
                <FiInstagram />
              </a>
              <a href="#" className="text-white">
                <FiTwitter />
              </a>
            </div>
          </div>
          <div className="info-a d-md-flex p-3 row my-5 text-center">
            <div className="col-md-6 list1">
              <ul className="">
                <a href="#">
                  <li className="py-2">Home</li>
                </a>
                <a href="#">
                  <li className="py-2">OUR PRODUCT</li>
                </a>
                <a href="#">
                  <li className="py-2">CONTACT US</li>
                </a>
              </ul>
            </div>
            <div className="col-md-6 sec2 text-center">
              <p className="contactText">
                Contact:
                <br />
                <span className=" justify-content-center">
                  +234 903 890 9401;
                </span>
                <br />
                <span>+234 907 943 6768</span>
              </p>
              <div>
                <p className="addressText">
                  Address:
                  <br />
                  <span className="float-right justify-content-center officeAddress">
                    Plot A9 Abuja Street, C Close, Banana Island, Lagos.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-xs-12 px-3 info"
          style={{ width: "40rem" }}
        >
          <div className="form_head">
            <div className="w-100 ">
              <input
                type="text"
                placeholder="Full Name"
                className=" p-2 form_g text g5 p-3 fullnameOnForm"
              ></input>
            </div>
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-100  text-white z1 p-3"
          ></input>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            className="w-100 my-3 text-white p-3"
          ></input>
          <textarea
            className="w-100 mb-2 p-3"
            placeholder="Let us know how we can help ..."
            id="Textarea1"
            rows="2"
          ></textarea>
          <button
            className="btn10 text-white d-flex"
            type="submit"
            style={{ fontSize: "25px" }}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="d-flex text-center justify-content-center bottom">
        <p>Copyright 2022. Motomart by Sujimoto.</p>
      </div>
    </div>
  );
}

export default Footer;
