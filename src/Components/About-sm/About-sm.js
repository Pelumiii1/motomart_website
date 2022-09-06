import "./About-sm.css";
import suji from "../../Assets/img/suji.png";
import aboutsm from "../../Assets/img/about-sm.png";


function About_sm() {
  return (
    <div className="About_sm d-flex align-items-center justify-content-center">
      <div className="container row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={suji} alt="suji" className="suji" />
        </div>
        <div className="about_text col-md-6 text-white text-center">
        <img src={aboutsm} alt="suji" className="about-sm" />
          
          <p className="text1">
            Sujimoto is a luxury real estate and construction company with a
            vision to redefine the way people live. Dubbed Nigeria’s most
            innovative luxury real estate brand, our core competencies include
            off-plan development mainly in Ikoyi and Banana Island, building for
            private clients, mixed-used development, Commercial and hospitality
            development, and lots more.
          </p>
          <p className="pt-4 text1">
            Our services caters to the discerning client who wishes to be
            associated only with bespoke and iconic structures. We build
            utilizing the best quality materials for residential or commercial
            apartments, office spaces, hotels, as well as Governments and
            institutional projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About_sm;
