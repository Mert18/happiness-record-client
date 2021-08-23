import React from 'react'
import Layout from './core/Layout'
import { Link } from 'react-router-dom'
import './styles/app.css'

const App = () => {
  return (
    <Layout>
      <div className="app">
        <div className="app-hero">
          <p>
            Happiness Record is somewhere you will find out what makes you
            happy.
          </p>
          <br />
          <p>
            It is simple. Everyday you are asked to enter some values. By time,
            you are going to find out what makes you happy.
          </p>
          <div id="links">
            <Link id="reg" to="/register">
              Register
            </Link>
            <Link id="log" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
