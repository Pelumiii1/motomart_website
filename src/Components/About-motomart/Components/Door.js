import door from "../../../Assets/img/door.png";


function Door() {
    return ( 
        <>

        <div className="circle1"></div>
        <img src={door} alt="door" className="d-flex door" />
          <button className="btn-op rounded text-dark">OTHER PRODUCTS</button>
        </>
     );
}

export default Door;