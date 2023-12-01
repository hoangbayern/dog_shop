import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

export const MyCart = () => {
  const {myCart} = useContext(CartContext);
  return (
    <>
        {myCart.map((item)=>{
            return (
                <p>{item.name}</p>
            );
        })}
    </>
  )
}
