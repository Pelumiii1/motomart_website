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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus augue
        malesuada erat ultrices vulputate tempor et magna.
      </p>
    </>
  );
}

export default Tub;
