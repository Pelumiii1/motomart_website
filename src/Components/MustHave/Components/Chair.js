import chair3 from "../../../Assets/img/chair3.png";
import mustHave from "../../../Assets/img/mustHave.png";

function Chair() {
  return (
    <>
      <img
        src={mustHave}
        alt="must have"
        className="musthave pe-3 "
        style={{ objectFit: "contain" }}
      />
      <div className="chair-circle"></div>
      <img src={chair3} alt="chair" className="chair3" />
    </>
  );
}

export default Chair;
