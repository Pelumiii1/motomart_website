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
        Discover the greatest luxury lights and doors from the world's top
        designers and manufacturers. Our premium collection is a showcase
        produced by artists using the best materials.
      </p>
    </>
  );
}

export default Light;
