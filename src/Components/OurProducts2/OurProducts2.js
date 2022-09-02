import "./OurProducts2.css";
import toilet1 from "../../Assets/img/toilet1.svg";
import toilet2 from "../../Assets/img/toilet2.svg";
import toilet3 from "../../Assets/img/toilet3.png";
import toilet4 from "../../Assets/img/toilet4.png";
import toilet5 from "../../Assets/img/toilet5.svg";
import toilet6 from "../../Assets/img/toilet6.svg";

function OurProducts2() {
  return (
    <div className="Ourproducts-container">
      <div className="container-fluid wrapper">
        <div className="part1">
          <img src={toilet1} alt="toilet" className="toilet1" />
        </div>
        <div className="part2">
          <img src={toilet2} alt="toilet" className="toilet2" />
          <img src={toilet3} alt="toilet" className="toilet3" />
        </div>
        <div className="part3">
          <img src={toilet4} alt="toilet" className="toilet4" />
        </div>
        <div className="part4">
          <img src={toilet5} alt="toilet" className="toilet5" />
        </div>
        <div className="part5">
          <img src={toilet6} alt="toilet" className="toilet6" />
        </div>
      </div>
    </div>
  );
}

export default OurProducts2;
