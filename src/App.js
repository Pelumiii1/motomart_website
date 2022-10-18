import { useState } from "react";
import "./App.css";
import HOMEPAGE from "./Homepage";
import ALL_PRODUCTS_PAGE from "./Components/All_Product_page/All_Product_Page";
import CART from "./Components/Cart_page/Cart_page";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    console.log(product);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<HOMEPAGE handleClick={handleClick} />} />
        <Route
          path="all_product"
          element={<ALL_PRODUCTS_PAGE handleClick={handleClick} />}
        />
        <Route path="cart_page" element={<CART />} />
        <Route path="*" element={<HOMEPAGE />} />
      </Routes>
    </div>
  );
}

export default App;
