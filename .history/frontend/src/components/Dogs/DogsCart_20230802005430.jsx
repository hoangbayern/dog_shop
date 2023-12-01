import React from 'react'

export const DogsCart = (props) => {
    const {name, breed, price, image, description} = props;
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
    </section>
  )
}
