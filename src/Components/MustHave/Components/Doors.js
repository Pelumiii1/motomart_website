import door2 from "../../../Assets/img/door2.png";

function Door() {
  return (
    <>
      <div className="circle"></div>
      <img src={door2} alt="door" className="door2" />
      <p className="door_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus augue
        malesuada erat ultrices vulputate tempor et magna. In hac habitasse
        platea dictumst. Morbi enim orci, bibendum sit amet massa sed.
      </p>
    </>
  );
}

export default Door;
