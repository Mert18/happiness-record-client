import React, { useState } from 'react'
import Layout from '../core/Layout'
import { Link } from 'react-router-dom'
import '../styles/forms.css'

const LoginScreen = ({ setAuth }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMessage] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = { email, password }
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/authentication/login`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      const parseRes = await response.json()

      if (parseRes.jwtToken) {
        localStorage.setItem('token', parseRes.jwtToken)
        setAuth(true)
      }
    } catch (err) {
      setMessage('Looks like your credentials are not correct.')
    }
  }

  return (
    <Layout>
      <div className="form-container" id="logcon">
        {message ? <div className="message">{message}</div> : ''}
        <form className="form" id="logform" onSubmit={onSubmitForm}>
          <h2>Login</h2>
          <input
            type="text"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button id="logbut"></button>
          <div className="instead">
            <Link to="/register">Register Instead</Link>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default LoginScreen
