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
            <img src={image} alt=""  />
        </div>
    </section>
  )
}
