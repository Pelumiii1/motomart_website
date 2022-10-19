import SELECTED_PRODUCTS from "./Selected_product";
import "./shopping-cart-page.css";
import Navbar from "../Header/Navbar/Navbar";
import shopping_cart_header_text from "../../Assets/img/shopping-cart-header-text.png";
// import N0_PRODUCT_PAGE from "./No_product_page";
import Footer from "../Footer/Footer";

function Cart_page() {
  return (
    <div className="shopping-cart-page-container">
      <Navbar />
      <div>
        <img
          src={shopping_cart_header_text}
          alt=""
          className="shopping_cart_header_text"
        />
      </div>
      <div
        className="row d-flex m-5"
        style={{ borderBottom: "1px solid white" }}
      >
        <div className="col-4 d-flex justify-content-center align-items-center">
          <p>Product</p>
        </div>
        <div className="col-4 d-flex justify-content-center row">
          <p className="col-6 d-flex justify-content-center">Category</p>
          <p className="col-6 d-flex justify-content-center">Quantity</p>
        </div>
        <div className="col-4">
          <p>Total Price</p>
        </div>
      </div>
      {/* {if(state.length)} */}
      <SELECTED_PRODUCTS />
      <Footer />
    </div>
  );
}

export default Cart_page;
