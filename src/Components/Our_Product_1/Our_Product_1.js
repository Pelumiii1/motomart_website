import "./Our_Product_1.css";
import Ourproduct_text from "../../Assets/img/ourProduct-text.png";

function Our_product() {
  return (
    <div className="op-container" id="all-product">
      <div className="banner">
        <img src={Ourproduct_text} alt="our product" className="our-product" />
      </div>
    </div>
  );
}

export default Our_product;
