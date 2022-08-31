import "./Footer.css";
import motomart from "../img/motomart.png";

function Footer() {
  return (
    <div className="footer-container p-3 container-fluid">
      <div className="d-flex row justify-content-evenly p-5 align-items-center ">
        <div className="col-6">
          <div className="text-center">
            <img src={motomart} alt="motomart-logo" />
          </div>
          <div className="info-a d-flex p-3 row my-5">
            <div className="col-6">
              <ul>
                <a href="#"><li className="py-2">Home</li></a>
                <a href="#"><li className="py-2">OUR PRODUCT</li></a>
                <a href="#"><li className="py-2">CONTACT US</li></a> 
              </ul>
            </div>
            <div className="col-6">
              <p>
                Contact:<span className="d-flex">+234 909 532 1622; </span>
                <span>+234 802 411 2236</span>
               </p>
               <div>
                <p>Address:<span className="d-flex">168 Awolowo Road Ikoyi, Lagos.</span></p>
                </div>            
            </div>
          </div>
        </div>
        <div className="col-6 px-3 info">
          <div className="d-flex py-3 gx-0 row">
            <input
              type="text"
              placeholder="First Name"
              className="col-6 p-2 text"
            ></input>
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              className="p-2 col-6 text"
            ></input>
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-100 py-1 p-2"
          ></input>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            className="w-100 my-3 py-1 p-2 text-primary"
          ></input>
          <textarea
            class="w-100 p-2"
            placeholder="Let us know how we can help you.."
            id="Textarea1"
            rows="2"
          ></textarea>
          <button className="btn text-white d-flex p-2">Shop Now</button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <p>Copyright 2022. Motomart by Sujimoto.</p>
      </div>

    </div>
  );
}

export default Footer;
