import React from 'react'
import "./navbar.css"


const Navbar = () => {
  return (
    <div className='nav-container'>

    <div  className="navbar">
      <div className="nav-left">
         <div className="brand">Arpan Agencies</div>
      </div>
      <div className="nav-center">
          <ul className='nav-links'>
              <li className='nav-link'>Home</li>
              <li className='nav-link'>Features</li>
              <li className='nav-link'>Review</li>
              <li className='nav-link'>Support</li>
              <li className='nav-link'>About Us</li>
          </ul>
      </div>
      <div className="nav-right">
          <button className='btn-purple'>Call Us</button>
      </div>
    </div>

    </div>
  )
}

export default Navbar