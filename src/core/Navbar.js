import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkAuthenticated = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/authentication/verify`,
        {
          method: 'POST',
          headers: { jwt_token: localStorage.token },
        }
      )

      const parseRes = await res.json()

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    checkAuthenticated()
  }, [])

  return (
    <div className="nav">
      <Link to="/" id="name">
        Happiness Record
      </Link>
      {isAuthenticated ? (
        <ul className="nav-nav">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
        </ul>
      ) : (
        ''
      )}
    </div>
  )
}

export default Navbar
