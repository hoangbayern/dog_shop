import React from 'react'

export const DogPage = (props) => {
    const {allDogs} = props;
  return (
    <>
    <div>Trang Thu Cung</div>
    <div>
        {allDogs.map((item)=>{
            console.log(item);
        })}
    </div>
    </>
  )
}
