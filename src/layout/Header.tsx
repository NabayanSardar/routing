import React from 'react'
import logo from "../assets/hero.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex flex-row justify-between bg-blue-200  h-12 w-full p-4'>
        <img src={logo} alt="logo" width="30px" height="30px"/>
        <div className='flex flex-row gap-2'>
<NavLink to="/">
  {({ isActive }) => (
    <span className={isActive ? "font-bold text-red-400" : "text-blue-600"}>Home</span>
  )}
</NavLink>
<NavLink to="/about">
  {({ isActive }) => (
    <span className={isActive ? "font-bold text-red-400" : "text-blue-600"}>About Us</span>
  )}
</NavLink>
<NavLink to="/products">
  {({ isActive }) => (
    <span className={isActive ? "font-bold text-red-400" : "text-blue-600"}>Products</span>
  )}
</NavLink>
<NavLink to="/contact">
  {({ isActive }) => (
    <span className={isActive ? "font-bold text-red-400" : "text-blue-600"}>Contact</span>
  )}
</NavLink>
        </div>
    </nav>
  )
}

export default Header