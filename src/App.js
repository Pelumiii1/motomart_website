import "./App.css";
import Header from "./Components/Header/Header";
import About_motomart from "./Components/About-motomart/about-motomart";
import Lux from "./Components/Lux/Lux";
import OurProduct1 from "./Components/Our_Product/Our_product";
import Footer from "./Components/Footer/Footer";
import About_sm from "./Components/About-sm/About-sm";
import OurProductcont from "./Components/OurProduct_cont/Ourproduct";
import MustHave from "./Components/MustHave/MustHave";
import OurProducts2 from "./Components/OurProducts2/OurProducts2";

function App() {
  return (
    <div className="App">
      <Header />
      <MustHave />
      <OurProduct1 />
      <OurProductcont />
      <OurProducts2 />
      <About_motomart />
      <Lux />
      <About_sm />
      <Footer />
    </div>
  );
}

export default App;
