import light from "../../../Assets/img/light_2.png";

function Light_2() {
  return (
    <>
      {/* <div className="musthaveLightCircle"></div> */}
      <img
        src={light}
        alt="light"
        className="lightImg2"
        style={{ position: "relative" }}
      />
      {/* <div className="circleOnLight"></div> */}
      <p
        className="textUnderLight2"
        style={{ fontFamily: "'Jacques Francois', serif" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus augue
        malesuada erat ultrices vulputate tempor et magna. In hac habitasse
        platea dictumst. Morbi enim orci, bibendum sit amet massa sed.
      </p>
    </>
  );
}

export default Light_2;
