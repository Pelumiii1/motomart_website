import { ADD_TO_CART, INCREASE, DECREASE, REMOVE } from "../types";
import toast from "react-hot-toast";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        carts: state.carts.find((cart) => cart.id === action.payload.id)
          ? state.carts.map((cart) =>
              cart.id === action.payload.id
                ? { ...action.payload, quantity: cart.quantity++ }
                : cart
            )
          : [action.payload, ...state.carts],
      };

    case "ADD":
      const tempstate = state.filter((item) => action.payload.id === item.id);
      if (tempstate.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }

    case INCREASE:
      return {
        ...state,
        carts: state.carts.map((cart) =>
          cart.id === action.payload.id
            ? { ...action.payload, quantity: cart.quantity++ }
            : cart
        ),
      };

    case DECREASE:
      return {
        ...state,
        carts: state.carts.map((cart) =>
          cart.id === action.payload.id
            ? { ...action.payload, quantity: cart.quantity-- }
            : cart
        ),
      };

    case REMOVE:
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
