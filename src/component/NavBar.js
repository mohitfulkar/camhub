import React from 'react'
import { MdCamera } from "react-icons/md";
import './NavBar.css'
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div className='container-navbar'>
      <div className='logo'>
          <MdCamera id='logo-pic'/>
          <label id='logo-label'>CamHub </label>
      </div>
      <div className='NavBar-links'>
      <Link id='NavBar-link'  to='/login'> Login</Link>
      </div>
    </div>
  )
}

