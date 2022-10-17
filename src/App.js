import "./App.css";
import HOMEPAGE from "./Homepage";
import ALL_PRODUCTS_PAGE from "./Components/All_Product_page/All_Product_Page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HOMEPAGE />} />
        <Route path="all_product" element={<ALL_PRODUCTS_PAGE />} />
        <Route path="*" element={<HOMEPAGE />} />
      </Routes>
    </div>
  );
}

export default App;
