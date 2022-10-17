import vector from "../../../Assets/img/Vector.png";
import musthave_foot from "../../../Assets/img/musthave_foot.svg";

function Foot() {
  return (
    <>
      <div className="head6 w-100">
        <img
          src={vector}
          alt="foot"
          className="musthave_foo w-100"
          style={{ position: "absolute" }}
        />
        <img src={musthave_foot} alt="foot" className="musthave_foo w-100" />
      </div>
    </>
  );
}

export default Foot;
