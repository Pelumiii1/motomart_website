import { useReducer } from "react";
import CartContext from "./cartContext";
import cartReducer from "./cartReducer";
import { ADD_TO_CART, INCREASE, DECREASE, REMOVE } from "../types";
import toast from "react-hot-toast";

const CartState = (props) => {
  const initialState = {
    carts: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add to cart
  const addToCart = (cart) => {
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  };

  // increse quantity
  const increase = (cart) => {
    dispatch({
      type: INCREASE,
      payload: cart,
    });
  };
  // decrease from cart
  const decrease = (cart) => {
    dispatch({
      type: DECREASE,
      payload: cart,
    });
  };
  // delete from cart
  const remove = (id) => {
    dispatch({
      type: REMOVE,
      payload: id,
    });
    toast.success("Product removed");
  };
  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        addToCart,
        decrease,
        increase,
        remove,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
