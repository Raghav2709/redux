import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const items = useSelector((state) => state.cart)
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <span style={{fontWeight:"bolder"}}>Redux Tutorial</span>
        <div>
            <Link className='navLink' style={{fontWeight:"bolder"}} to={"/"}>Home</Link>
            <Link className='navLink' style={{marginRight:"7px",fontWeight:"bolder"}} to={"/cart"}>Cart</Link>
            <span style={{fontWeight:"bolder"}}>items: {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar