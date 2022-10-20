import { useContext, useId } from "react";
import cart_icon from "../Assets/cart-icon.png";
import CartContext from "../../../Context/cart/cartContext";

function All_Products({ allProducts, showAllProducts, products }) {
  const id = useId();
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  return (
    <>
      <div className="all-products-container d-flex gap-5 pb-5 mb-4">
        {allProducts.slice(0, products).map((product, index) => {
          product.quantity = 1;
          return (
            <div key={`${id}-${index}`}>
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
      <div className="d-flex justify-content-center">
        <button
          className="text-white all_products_btn text-uppercase"
          onClick={() => showAllProducts()}
        >
          see more
        </button>
      </div>
    </>
  );
}

export default All_Products;
