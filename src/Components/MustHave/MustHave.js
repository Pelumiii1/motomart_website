import "./MustHave.css";
import chair3 from "../img/chair3.png";
import mustHave from "../img/mustHave.png";
import tub from "../img/tub.png";
import light from "../img/light.png";
import musthave_foot from "../img/musthave_foot.png";
import door2 from "../img/door2.png";

function MustHave() {
  return (
    <div className="musthave_container text-white">
      <div className="container-fluid ps-4">
        <div className="part1 row">
          <div className="col-md-6 d-md-flex text-center align-items-center">
            <img src={mustHave} alt="must have" className="musthave pe-3" />
            <img src={chair3} alt="chair" className="chair3" />
          </div>
          <div className="col-md-6 w-25 g2">
            <img src={light} alt="light" className="light" />
          </div>
        </div>
        <div className="part2 row d-md-flex text-center">
          <div className="col-md-6 text-center g4">
            <img src={tub} alt="tub" className="tub" />
            <p className="tub-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus
              augue malesuada erat ultrices vulputate tempor et magna.
            </p>
          </div>
          <div className="col-md-6 d-md-flex d1">
            <img src={door2} alt="door" className="door2" />
            <p className="door_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus
              augue malesuada erat ultrices vulputate tempor et magna. In hac
              habitasse platea dictumst. Morbi enim orci, bibendum sit amet
              massa sed.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center btnc">
          <button className="btn11 rounded">SHOP NOW</button>
        </div>
      </div>
      <div className="head6 w-100">
        <img src={musthave_foot} alt="foot" className="musthave_foot" />
      </div>
    </div>
  );
}

export default MustHave;
