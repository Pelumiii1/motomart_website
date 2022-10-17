import Products_List from "./Products_List";
import cart_icon from "./Assets/cart-icon.png";

function All_Products() {
  return (
    <>
      <div className="all-products-container d-flex gap-5">
        {Products_List.map((product) => (
          <div>
            <div>
              <img
                src={product.productImg}
                alt="products"
                height={257}
                className="productImg"
              />
              <img src={cart_icon} alt="cart" className="cart_icon" />
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
