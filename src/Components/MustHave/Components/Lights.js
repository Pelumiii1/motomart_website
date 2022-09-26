import light from "../../../Assets/img/light.png";

function Light() {
  return (
    <>
      <div className="musthaveLightCircle"></div>
      <img
        src={light}
        alt="light"
        className="lightImg"
        style={{ position: "relative" }}
      />
      <div className="circleOnLight"></div>
      <p
        className="textUnderLight"
        style={{ fontFamily: "'Jacques Francois', serif" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus augue
        malesuada erat ultrices vulputate tempor et magna. In hac habitasse
        platea dictumst. Morbi enim orci, bibendum sit amet massa sed.
      </p>
    </>
  );
}

export default Light;
