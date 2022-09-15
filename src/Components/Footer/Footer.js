import "./Footer.css";
import motomart from "../../Assets/img/motomart.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer-container p-3 container-fluid" id="contact">
      <div className="d-flex row justify-content-evenly p-5 align-items-center ">
        <div className="col-md-6 col-xs-12 gy-xs-3 f4">
          <div className=" row l3">
            <div className="col-md-6 ll">
              <img src={motomart} alt="motomart-logo" className="motomart-logo"/>
            </div>

            <div className="icons text-white d-flex bg-succes col-md-6 align-items-center justify-content-center">
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
              <p>
                Contact:<br/>
                <span className=" justify-content-center">
                  +234 909 532 1622;
                </span><br/>
                <span>+234 802 411 2236</span>
              </p>
              <div>
                <p>
                  Address:<br/>
                  <span className="float-right justify-content-center">
                    168 Awolowo Road Ikoyi, Lagos.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 px-3 info">
          <div className=" form_head">
            <div className="w-100">
              <input
                type="text"
                placeholder="Full Name"
                className=" p-2 form_g text g5"
              ></input>
            </div>
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-100 py-2 p-2 text-white z1"
          ></input>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            className="w-100 my-3 py-2 p-2 text-white"
          ></input>
          <textarea
            className="w-100 p-2 mb-2"
            placeholder="Let us know how we can help ..."
            id="Textarea1"
            rows="2"
          ></textarea>
          <button className="btn10 text-white d-flex " type="submit">
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
