import AllProducts from "./All-Products";

function Products() {
  return (
    <div className="products">
      <div className="products-warpper">
        <div className="buttons-container">
          <div className="d-flex justify-content-between align-items-end w-75 ">
            <button className="buttons">All products</button>
            <button className="buttons">sanitary wares</button>
            <button className="buttons">doors</button>
            <button className="buttons">building materials</button>
            <button className="buttons">funitures</button>
          </div>
        </div>
      </div>
      <AllProducts />
    </div>
  );
}

export default Products;
