import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import "./cart.css";

export const MyCart = () => {
  const { myCart } = useContext(CartContext);
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CheckOut:</div>
        <div className="cart-items">
          {myCart.map((item) => {
            return (
              <div className="cart-items">
                <img src={item.image} className="cart-item-img" alt="" />
                <span>{item.name}: {item.price}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
