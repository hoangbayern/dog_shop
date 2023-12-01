import React from 'react'

export const DogPage = (props) => {
    const {allDogs} = props;
  return (
    <>
        {allDogs.map((item)=>{
            return (
            <div>{item.name} - {item.breed} - {item.price}</div>
            )
        })}
    </>
  )
}
