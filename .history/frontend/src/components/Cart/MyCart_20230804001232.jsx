import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export const MyCart = () => {
  const { myCart } = useContext(CartContext);
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CheckOut:</div>
        <div className="cart-items">
          {myCart.map((item) => {
            return <p>{item.name}</p>;
          })}
        </div>
      </section>
    </>
  );
};
