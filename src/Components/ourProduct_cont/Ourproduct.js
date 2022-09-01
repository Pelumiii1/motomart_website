import "./ourProduct.css";
import tap1 from "../img/img1.png";
import tap2 from "../img/img2.png";
import tap3 from "../img/img3.png";
import tap4 from "../img/img4.png";
import tap5 from "../img/img5.png";
import tap6 from "../img/img6.png";

function OurProduct() {
  return (
    <div className="our-product-container d-flex container-fluid row justify-content-center">
      <div className="d-md-flex w-75 mb-5 pb-3">
        <div className="group1 grid1 text-white col-md-4">
          <div>
            <img src={tap1} alt="tap" className="img1" />
            <p>MMSWIII38</p>
          </div>
          <div>
            <img src={tap2} alt="tap" className="img2" />
            <p className="text3">MMSWIII38</p>
          </div>
        </div>
        <div className="group1 grid2 text-white col-md-4">
          <div>
            <img src={tap3} alt="tap" className="img1" />
            <p>MMSWIII38</p>
          </div>
          <div>
            <img src={tap4} alt="tap" className="img2" />
            <p className="text3">MMSWIII38</p>
          </div>
        </div>
        <div className="group1 grid1 text-white col-md-4">
          <div>
            <img src={tap5} alt="tap" className="img1" />
            <p>MMSWIII38</p>
          </div>
          <div>
            <img src={tap6} alt="tap" className="img2" />
            <p className="text3">MMSWIII38</p>
          </div>
        </div>
          </div>
          <div className="d-flex justify-content-center btn1 mt-5">
          <button className="btn2 rounded">OPEN PRODUCTS</button>
          </div>

    </div>
  );
}

export default OurProduct;
