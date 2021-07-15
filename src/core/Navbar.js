import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to='/'>
          <img src='/images/lg.svg' width='158px' alt='logo' />
        </Link>
      </div>
      {isAuthenticated ? <ul className="nav-nav">
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/feed'>Feed</Link></li>
      </ul> : <ul className="nav-nav">
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>}
      
      
    </div>
  )
}

export default Navbar
