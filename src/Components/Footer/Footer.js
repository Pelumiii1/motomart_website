import "./Footer.css";
import motomart from "../img/motomart.png";

function Footer() {
  return (
    <div className="footer-container p-3 container-fluid">
      <div className="d-flex row justify-content-evenly p-5 align-items-center ">
        <div className="col-md-6 col-xs-12 gy-xs-3 bg-success">
          <div className="text-center">
            <img src={motomart} alt="motomart-logo" />
          </div>
          <div className="info-a d-md-flex p-3 row my-5 text-center">
            <div className="col-md-6 ">
              <ul className="list1">
                <a href="#"><li className="py-2">Home</li></a>
                <a href="#"><li className="py-2">OUR PRODUCT</li></a>
                <a href="#"><li className="py-2">CONTACT US</li></a> 
              </ul>
            </div>
            <div className="col-md-6 sec2">
              <p>
                Contact:<span className="d-flex">+234 909 532 1622; </span>
                <span>+234 802 411 2236</span>
               </p>
               <div>
                <p>Address:<span className="d-flex ">168 Awolowo Road Ikoyi, Lagos.</span></p>
                </div>            
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 bg-danger px-3 info">
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
            class="w-100 p-2 mb-2"
            placeholder="Let us know how we can help you.."
            id="Textarea1"
            rows="2"
          ></textarea>
          <button className="btn10 text-white d-flex " type="submit">Shop Now</button>
        </div>
      </div>
      <div className="d-flex text-center justify-content-center">
      <p>Copyright 2022. Motomart by Sujimoto.</p>
      </div>

    </div>
  );
}

export default Footer;
