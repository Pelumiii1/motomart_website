import "./Lux.css";
import chair2 from "../img/chair2.png";
import sign from "../img/sign.png";

function Lux() {
  return (
    <div className="lux-container container-fluid py-5 ">
      <div className="">
        <div className=" d-flex justify-content-center ">
          <div className="d-flex row w-75 alig">
            <div className="col-6 d-flex justify-content-center align-items-center ">
              <img src={sign} alt="sign" className="sign" />
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={chair2} alt="chair" className="lux-chair" />
            </div>
          </div>
        </div>
        <div className="bottom-text">
          <p>
            Motomart has a collection of LUXURY this is COMFORTABLE and
            AFFORDABLE for every home or office arrangement.
          </p>
          <button className="btn4 rounded">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Lux;
