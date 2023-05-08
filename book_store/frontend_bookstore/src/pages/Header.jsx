import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
function Header() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default Header
