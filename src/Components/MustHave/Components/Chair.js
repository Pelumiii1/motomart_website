import chair3 from "../../../Assets/img/chair3.png";
import mustHave from "../../../Assets/img/mustHave.png";

function Chair() {
  return (
    <>
      <img
        src={mustHave}
        alt="must have"
        className="musthaveText"
        style={{ objectFit: "contain" }}
      />
      <div className=""></div>
      <img src={chair3} alt="chair" className="chairInMusthave" />
    </>
  );
}

export default Chair;
