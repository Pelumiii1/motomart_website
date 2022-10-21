import { useState } from "react";
import AllProducts from "./All-Products";
import Products_List from "./Products_List";

function Products() {
  const [products, setProducts] = useState(12);
  const [allProducts, setAllProducts] = useState(Products_List);
  const [isActive, setIsActive] = useState(false);

  const showAllProducts = () => {
    setProducts(Products_List.length);
  };

  const allProduct = () => {
    setAllProducts(Products_List);
  };

  const sanitaryWareFilter = () => {
    if (isActive === false) {
      setAllProducts(
        Products_List.filter((product) => product.category === "sanitary wares")
      );
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const doorFilter = () => {
    if (isActive === false) {
      setAllProducts(
        Products_List.filter((product) => product.category === "doors")
      );
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const buildingMaterialFilter = () => {
    setAllProducts(
      Products_List.filter(
        (product) => product.category === "building materials"
      )
    );
  };

  const funitureFilter = () => {
    setAllProducts(
      Products_List.filter((product) => product.category === "funitures")
    );
  };

  return (
    <div className="products">
      <div className="products-warpper">
        <div className="buttons-container">
          <div className="d-flex justify-content-between align-items-end w-75 ">
            <button
              className="buttons"
              style={{
                backgroundColor: isActive ? "white" : "transparent",
                color: isActive ? "#462828" : "white",
              }}
              onClick={() => allProduct()}
            >
              All products
            </button>
            <button
              className="buttons"
              style={{
                backgroundColor: isActive ? "white" : "transparent",
                color: isActive ? "#462828" : "white",
              }}
              onClick={() => sanitaryWareFilter()}
            >
              sanitary wares
            </button>
            <button
              className="buttons"
              style={{
                background: isActive ? "white" : "transparent",
                color: isActive ? "#462828" : "white",
              }}
              onClick={() => doorFilter()}
            >
              doors
            </button>
            <button
              className="buttons"
              onClick={() => buildingMaterialFilter()}
            >
              building materials
            </button>
            <button className="buttons" onClick={() => funitureFilter()}>
              funitures
            </button>
          </div>
        </div>
      </div>
      <AllProducts
        products={products}
        showAllProducts={showAllProducts}
        allProducts={allProducts}
      />
    </div>
  );
}

export default Products;
