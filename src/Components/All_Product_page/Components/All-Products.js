// import { useState } from "react";
import Products_List from "./Products_List";
import cart_icon from "../Assets/cart-icon.png";

function All_Products({ handleClick }) {
  return (
    <>
      <div className="all-products-container d-flex gap-5 pb-5 mb-4">
        {Products_List.slice(0, 12).map((product) => (
          <div>
            <div className="product-card">
              <img
                src={product.productImg}
                alt="products"
                height={320}
                className="productImg"
              />
              <img
                src={cart_icon}
                alt="cart"
                className="cart_icon"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(product)}
              />
            </div>

            <h4
              className="mt-4"
              style={{ fontSize: "1rem", marginBottom: "-0.5rem" }}
            >
              {product.productName}
            </h4>
            <code
              className="m-auto p-auto"
              style={{ color: "#ab6c6c", fontSize: "0.7rem" }}
            >
              {product.code}
            </code>
            <h4 style={{ fontSize: "1rem" }}>
              <span>&#8358;</span>
              85,000
            </h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default All_Products;
