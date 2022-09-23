import door2 from "../../../Assets/img/door2.png";

function Door() {
  return (
    <>
      <div className="circle"></div>
      <img
        src={door2}
        alt="door"
        className="doorImg"
        style={{ position: "relative" }}
      />
      <div className="circleOnDoorInMusthave"></div>
    </>
  );
}

export default Door;
