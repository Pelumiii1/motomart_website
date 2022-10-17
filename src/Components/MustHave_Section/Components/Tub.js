import tub from "../../../Assets/img/tub.png";

function Tub() {
  return (
    <>
      <div className="circle2"></div>
      <img
        src={tub}
        alt="tub"
        className="tubImg"
        style={{ position: "relative" }}
      />
      <div className="circleOnTub"></div>
      <p
        className="textUnderTub"
        style={{ fontFamily: "'Jacques Francois', serif" }}
      >
        Explore our wash Basins and bathtubs in a variety of materials,
        including porcelain tubs, ceramic tubs, and fiberglass tubs. Elevate the
        aesthetics of Bathroom.
      </p>
    </>
  );
}

export default Tub;
