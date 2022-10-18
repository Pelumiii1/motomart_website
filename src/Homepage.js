import HEADER from "./Components/Header/Header";
import ABOUT_MOTOMART from "./Components/About_Motomart/About_Motomart";
import LUXURY_SECTION from "./Components/Luxury_Section/Luxury_Section";
import OUR_PRODUCTS_1 from "./Components/Our_Product_1/Our_Product_1";
import FOOTER from "./Components/Footer/Footer";
import ABOUT_SUJIMOTO from "./Components/About_Sujimoto/About_Sujimoto";
import OUR_PRODUCTS_2 from "./Components/Our_Product_2/Our_Product_2";
import MUSTHAVE_SECTION from "./Components/MustHave_Section/MustHave_Section";
import OUR_PRODUCTS_3 from "./Components/Our_Product_3/Our_Product_3";

function Homepage({ handleClick }) {
  return (
    <>
      <HEADER handleClick={handleClick} />
      <MUSTHAVE_SECTION />
      <OUR_PRODUCTS_1 />
      <OUR_PRODUCTS_2 />
      <OUR_PRODUCTS_3 />
      <ABOUT_MOTOMART />
      <LUXURY_SECTION />
      <ABOUT_SUJIMOTO />
      <FOOTER />
    </>
  );
}

export default Homepage;
