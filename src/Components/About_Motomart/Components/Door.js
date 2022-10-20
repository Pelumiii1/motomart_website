import door from "../../../Assets/img/door.png";

function Door() {
  return (
    <>
      <div className="circleOnDoor"></div>
      <img
        src={door}
        alt="door"
        className="d-flex door"
        style={{ position: "relative" }}
      />
      <button
        className="bottomOnAboutMotomart rounded text-dark fw-bold"
        style={{ fontFamily: " fontFamily: 'Inter', sans-serif;" }}
      >
        OTHER PRODUCTS
      </button>
    </>
  );
}

export default Door;
