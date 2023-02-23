import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
              <NavLink to="/" style={({isActive}) =>({textDecoration : isActive ? "none" : "underline" , marginRight:10})} >My store</NavLink>

        <NavLink to="/Products" style={({isActive}) =>({color : isActive ? "red" : "green"})}>Products</NavLink>
      
    </nav>
  )
}

export default Navbar