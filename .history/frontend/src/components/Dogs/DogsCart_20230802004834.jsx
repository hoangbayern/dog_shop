import React from 'react'

export const DogsCart = (props) => {
    const {names, breed, price, image, description} = props;
  return (
    <div>{names} - {price}</div>
  )
}
