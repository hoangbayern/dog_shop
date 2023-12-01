import React, { useContext, useState } from 'react'
import './dogs.css';
import { CartContext } from '../Contexts/CartContext';

export const DogsCart = (props) => {
    const {name, breed, price, image, description} = props;
    const {addCart} = useContext(CartContext);
    const [isAddCart, setAddCart] = useState(false);
    const handleAddToCart = () => {
        setAddCart(true);
        const arrCart = {
            name: name,
            price: price,
            image: image
        };
        
    }
  return (
    <section className='dogs'>
        <div className='dog-info'>
            <p>{name}</p>
            <p>{breed}</p>
        </div>
        <div className="dogs-img-container">
            <img className='dog-img' src={image} alt="imageDogs"/>
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">{price}$</div>
        {isAddCart ? (
        <button className="dogs-btn-disabled" disabled>ADD TO CART</button>
        ) : (
            <button className="dogs-btn" onClick={handleAddToCart}>ADD TO CART</button>
        )}
    </section>
  )
}
