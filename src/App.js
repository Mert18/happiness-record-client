import React, { useRef, useEffect } from 'react'
import Layout from './core/Layout'
import { Link } from 'react-router-dom'
import './styles/app.css'
import { gsap } from 'gsap'

const App = () => {
  const boxRef = useRef()

  return (
    <Layout>
      <div className="app" ref={boxRef}>
        <div className="app-hero">
          <p>Find your source of happiness.</p>
        </div>

        <div className="app-exp">
          <p>
            It is simple. Everyday you are asked to enter some values. By time,
            you are going to find out what makes you happy.
          </p>
        </div>

        <div className="app-auth">
          <Link id="reg" to="/register">
            Register
          </Link>
          <Link id="log" to="/login">
            Login
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default App
