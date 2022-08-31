import "./Navbar.css";
import motomart from "../../img/motomart.png";
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

function Navbar() {
  return (
    <div className="navbar-wrapper container-fluid py-2">
      <div className="row mt-5 ">
        <div className="col-md-5 d-sm-none"></div>
        <div className="col-md-7">
          <div className="d-flex align-items-end justify-content-between">
            <img src={motomart} alt="motomart-logo" />
            <div className="navbar_links text-white">
              <p>HOME</p>
              <p>All PRODUCTS</p>
              <p>CONTACT</p>
            </div>
            <div className=" icons text-white d-flex">
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
