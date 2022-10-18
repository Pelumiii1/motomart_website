// import logo from "./logo.svg";
import "./All_Product_Page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HERO_SECTION from "./Components/Hero_section";
import Navbar from "../Header/Navbar/Navbar";
import ALL_PRODUCTS_SECTION from "./Components/Products";
import Footer from "../Footer/Footer";

function All_Products_Page({ handleClick }) {
  return (
    <div className="App">
      <Navbar />
      <HERO_SECTION />
      <ALL_PRODUCTS_SECTION handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default All_Products_Page;
