import "./about-motomart.css";
import door from "../img/door.png";
import chair from "../img/chair.png";
import basin from "../img/basin.png";
import about_m from "../img/about-m.png";

function AboutMotomart() {
  return (
    <div className="p1-container container-fluid">
      <div className="row d-flex">
        <div className="text7 ps-5 mt-5 pt-5 col-6 text-white">
          <img src={about_m} alt="about-motomart"  className="about_motomart pb-5 "/>
          <p className="text2 ">
            Motomart is the one-stop shop for affordable luxury sanitary wares,
            furniture, doors and building materials. The company is a wholly
            owned subsidiary of Sujimoto Construction.
          </p>
          <p className="text2">
            Our clientele consists of cultured individuals that appreciate
            rarified luxury, developers, contractors, construction companies and
            interior designer.
          </p>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img src={chair} alt="chair"  className="chair"/>
        </div>
      </div>
      <div className="d-flex row s-2">
        <div className="col-6 text-center s-1 ">
          <img src={door} alt="door" className="d-flex door" />
          <button className="btn-op rounded">OTHER PRODECTS</button>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img src={basin} alt="basin" className="basin " />
        </div>
      </div>
    </div>
  );
}

export default AboutMotomart;
