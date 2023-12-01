import React from 'react'

export const DogPage = (props) => {
    const {allDogs} = props;
  return (
    <>
    <div>Trang Thu Cung</div>
    <br></br>
    <div>
        {allDogs.map((item)=>{
            return (
            <div>{item.name} - {item.breed} - {item.price}</div>
            )
        })}
    </div>
    </>
  )
}
