import React, { useState } from 'react'
import './dogs.css';

export const DogsCart = (props) => {
    const {name, breed, price, image, description} = props;
    const [isAddCart, setAddCart] = useState(false);
    const handleAddToCart = () => {
        setAddCart(true);
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
        <button className="dogs-btn" onClick={handleAddToCart}>ADD TO CART</button>
    </section>
  )
}
