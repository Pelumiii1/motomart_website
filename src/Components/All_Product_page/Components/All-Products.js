import { useContext } from "react";
import Products_List from "./Products_List";
import cart_icon from "../Assets/cart-icon.png";
import CartContext from "../../../Context/cart/cartContext";
import toast, { Toaster } from "react-hot-toast";

function All_Products({ handleClick }) {
  const notify = () => toast("Added to cart");
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;
  return (
    <>
      <div className="all-products-container d-flex gap-5 pb-5 mb-4">
        {Products_List.slice(0, 12).map((product) => {
          product.quantity = 1;
          return (
            <div>
              <div className="product-card" key={product.id}>
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
                  onClick={() => {
                    addToCart(product);
                  }}
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
          );
        })}
      </div>
    </>
  );
}

export default All_Products;
