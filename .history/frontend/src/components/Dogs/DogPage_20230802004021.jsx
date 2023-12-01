import React from 'react'

export const DogPage = (props) => {
    const {allDogs} = props;
  return (
    <>
    <section className='dogs-container'>
        {allDogs.map((item)=>{
            return (
            <div>{item.name} - {item.breed} - {item.price}</div>
            )
        })}
        </section>
    </>
  )
}
