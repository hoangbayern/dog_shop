import React from 'react'
import { Link } from 'react-router-dom'
import "./narbar.css";

export const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <Link to='/'> Home </Link>
            <Link to='/dogs'> DogShop </Link>
            <Link to='/cart'> MyCart </Link>
        </div>
    </>
  )
}
