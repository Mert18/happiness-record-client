import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import '../styles/forms.css'

const RegisterScreen = ({ setAuth }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [message, setMessage] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = { email, password, name }
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const parseRes = await response.json()

      if (parseRes.jwtToken) {
        localStorage.setItem('token', parseRes.jwtToken)
        setAuth(true)
      } else {
        setAuth(false)
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <Layout>
      <div className="form-container" id="regcon">
        <div className="message">{message}</div>
        <div className="formcontainer-info">
          <p>
            In order to protect your privacy, we recommend you to use aliases
            instead of real names.
          </p>
        </div>
        <form className="form" id="regform" onSubmit={onSubmitForm}>
          <h2>Register</h2>
          <input
            type="text"
            id="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button id="regbut"></button>
        </form>
      </div>
    </Layout>
  )
}

export default RegisterScreen
