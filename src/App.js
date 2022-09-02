import "./App.css";
import Header from "./Components/Header/Header";
import About_motomart from "./Components/about-motomart/about-motomart";
import Lux from "./Components/Lux/Lux";
import OurProduct1 from "./Components/our_product/Our_product";
import Footer from "./Components/Footer/Footer";
import About_sm from "./Components/About-sm/About-sm";
import OurProductcont from "./Components/ourProduct_cont/Ourproduct";
import OurProducts2 from "./Components/OurProducts2/OurProducts2";
import MustHave from "./Components/MustHave/MustHave";


function App() {
  return (
    <div className="App">
      <Header />
      <MustHave />
      <About_motomart />
      <OurProduct1 />
      <OurProductcont />
      {/* <OurProducts2 /> */}
      <Lux />
      <About_sm />
      <Footer />
    </div>
  );
}

export default App;
