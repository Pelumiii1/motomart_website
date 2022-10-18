// import { useState, useEffect } from "react";
// import productList from "../All_Product_page/Components/Products_List";
import "./shopping-cart-page.css";
import Navbar from "../Header/Navbar/Navbar";
import img1 from "../../Components/All_Product_page/Assets/chair_1.png";
import N0_PRODUCT_PAGE from "./No_product_page";
import Footer from "../Footer/Footer";
import shopping_cart_header_text from "../../Assets/img/shopping-cart-header-text.png";

function Cart_page() {
  return (
    <div className="shopping-cart-page-container">
      <div>
        <Navbar />
      </div>
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
      <div className="row mx-5">
        <div className="col-4 d-flex align-items-center">
          <img src={img1} alt="" />
          <div className="mx-4 product-ID">
            <p>Product Name</p>
            <code>Code</code>
            <p>N85,000</p>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6 d-flex justify-content-center">
              <p>Funiture</p>
            </div>
            <div className="col-5 d-flex  justify-content-center gap-2">
              <button>-</button>
              <button>0</button>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex">
          <p className="w-50">N85,000</p>
          <p>d</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart_page;
