import { useState } from "react";
import SELECTED_PRODUCTS from "./Selected_product";
import "./shopping-cart-page.css";
import Navbar from "../Header/Navbar/Navbar";
import { Button } from "react-bootstrap";
import OrderModal from "./OrderModal";
import NOPRODUCTPAGE from "./No_product_page";
import shopping_cart_header_text from "../../Assets/img/shopping-cart-header-text.png";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import CartContext from "../../Context/cart/cartContext";

function Cart_page() {
  const cartContext = useContext(CartContext);
  const { carts } = cartContext;

  const [show, setShow] = useState(false);
  const onHide = () => {
    setShow(false);
  };
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
      <div className="row d-flex m-5 ">
        <div className="col-4 d-flex products-id-heads">
          <p>Product</p>
        </div>
        <div className="col-4 d-flex justify-content-center row px-4">
          <p className="col-6 d-flex justify-content-center">Category</p>
          <p className="col-6 d-flex justify-content-center">Quantity</p>
        </div>
        <div className="col-4">
          <p>Total Price</p>
        </div>
      </div>
      {carts.length > 0 ? <SELECTED_PRODUCTS /> : <NOPRODUCTPAGE />}
      <div className="container-fluid button_wrapper my-4">
        <div className="d-flex justify-content-end">
          <Button
            style={{
              padding: "0.5rem 1.3rem",
              border: "0.6px solid white",
              fontSize: "1.5rem",
            }}
            onClick={() => setShow(true)}
            className="btn_in_shopping_cart text-uppercase"
          >
            Place Order
          </Button>
        </div>
      </div>
      <OrderModal show={show} onHide={onHide} />
      <Footer />
    </div>
  );
}

export default Cart_page;
