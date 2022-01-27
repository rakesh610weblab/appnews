import React, { createContext, useReducer } from "react";
import "./Cart.css";
import { products } from "./Products";
import Contextcart from "./Contextcart";
import { reducer } from "./Reducer";

export const CartContext = createContext();

const second = {
  item: products,
  totalAmout: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, second);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: "CLEAR_ITEM",
    });
  };

  const increquant = (id) => {
    return dispatch({
      type: "INCREMENT_QUANT",
      payload: id,
    });
  };

  const decrequant = (id) => {
    return dispatch({
      type: "DECREMENT_QUANT",
      payload: id,
    });
  };

  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increquant, decrequant }}
      >
        <Contextcart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
