import React from 'react'
import './Navbar.css';
import nike_logo from './images/nike_logo.jpg';
export default function Navbar() {
  return (
    <nav className='navbar'>
        <img src={nike_logo} alt="logo" style = {{width: '7%', borderRadius: '15%'}} />
        <div className="nav_elems">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Location</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        </div>
            <button>Login</button>
    </nav>
  )
}
