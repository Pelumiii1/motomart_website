import { useContext } from "react";
import CartContext from "../../Context/cart/cartContext";
import delete_icon from "../../Assets/icons/delete-icon.png";

function Selected_product() {
  const cartContext = useContext(CartContext);
  const { carts, remove, increase, decrease } = cartContext;

  const total =
    carts &&
    carts.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

  return (
    <div>
      <div className="">
        {carts &&
          carts.map((item, index) => {
            //   item.quantity = 1;
            return (
              <div className="each_product mb-3 py-3" key={index}>
                <div className="row mx-5">
                  <div className="col-4 d-flex align-items-center justify-content-center">
                    <img
                      src={item.productImg}
                      alt=""
                      height={150}
                      width={150}
                    />
                    <div className="mx-4 product-ID">
                      <p>{item.productName}</p>
                      <code>{item.code}</code>
                      <p>{item.price}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row h-100 d-flex align-items-center">
                      <div className="col-6 d-flex justify-content-center">
                        <p>Funiture</p>
                      </div>
                      <div className="col-5 d-flex justify-content-center gap-2 ">
                        <div
                          className="btn text-white"
                          onClick={() => {
                            item.quantity > 1
                              ? decrease(item)
                              : remove(item.id);
                          }}
                        >
                          -
                        </div>
                        <div className="btn text-white">{item.quantity}</div>
                        <div
                          className="btn text-white"
                          onClick={() => increase(item)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <div className="w-100 d-flex align-items-center">
                      <p className="w-50">
                        <span>&#8358;</span>
                        {item.quantity * item.price}
                      </p>
                      <img
                        src={delete_icon}
                        alt="delete"
                        height={30}
                        style={{ cursor: "pointer" }}
                        onClick={() => remove(item.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        )
      </div>
      {carts && carts.length > 0 && (
        <div className="container">
          <div className="total-price d-flex justify-content-end">
            <h3
              className="fw-bold"
              style={{
                position: "relative",
                right: "-6rem",
              }}
            >
              ( <span>&#8358;</span>
              {total} )
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Selected_product;
