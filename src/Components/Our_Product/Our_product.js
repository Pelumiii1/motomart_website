import "./our-product.css";
import Ourproduct_text from '../img/ourProduct-text.png'

function Our_product() {
  return (
    <div className="op-container">
          <div className="banner">
              <img src={ Ourproduct_text } alt='our product' className="our-product"/>
      </div>
    </div>
  );
}

export default Our_product;
