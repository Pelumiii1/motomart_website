import "./Navbar.css";
import motomart from "../../img/motomart.png";
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

function Navbar() {
  return (
    <div className="navbar-wrapper container-fluid py-2">
      <div className="row mt-3 ">
        <div className="col-md-5 empty"></div>
        <div className="col-md-7 full ">
          <div className="d-md-flex align-items-end justify-content-between">
            <img src={motomart} alt="motomart-logo" />
            <div className="navbar_links text-white">
              <a>HOME</a>
              <a>All PRODUCTS</a>
              <a>CONTACT</a>
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
