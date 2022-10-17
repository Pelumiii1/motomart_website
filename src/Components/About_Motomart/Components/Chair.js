import chair from "../../../Assets/img/chair.png";

function Chair() {
  return (
    <>
      <div className="circleOnChair"></div>
      <img src={chair} alt="chair" className="chair" style={{ zIndex: "5" }} />
    </>
  );
}

export default Chair;
