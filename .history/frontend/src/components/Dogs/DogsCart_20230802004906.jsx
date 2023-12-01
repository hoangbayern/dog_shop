import React from 'react'

export const DogsCart = (props) => {
    const {name, breed, price, image, description} = props;
  return (
    <div>{name} - {price}</div>
  )
}
