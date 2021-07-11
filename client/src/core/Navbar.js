import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src='/images/lg.svg' width='128px' alt='logo' />
      </div>
      <ul className="nav-nav">
        <li><Link to='/'>Profile</Link></li>
        <li><Link to='/'>Feed</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
