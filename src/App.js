import "./App.css";
import Header from "./Components/Header/Header";
import About_motomart from "./Components/about-motomart/about-motomart";
import Lux from "./Components/Lux/Lux";
import OurProduct from "./Components/our_product/Our_product";
import Footer from "./Components/Footer/Footer";
import About_sm from "./Components/About-sm/About-sm";
import OurProduct1 from "./Components/ourProduct_cont/Ourproduct";

function App() {
  return (
    <div className="App">
      <Header />
      <About_motomart />
      <OurProduct />
      <OurProduct1 />
      <Lux />
      <About_sm />
      <Footer />
    </div>
  );
}

export default App;
