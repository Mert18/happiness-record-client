import React from 'react'
import Layout from '../core/Layout'
import '../styles/forms.css'
const LoginScreen = () => {
  return (
    <Layout>
      <div className="form-container" id="logcon">
        <form className="form" id="logform">
            <h2>Login</h2>
            <input type='text' id='email' placeholder="email" />
            <input type='text' id='password' placeholder="password" />
            <button id="logbut"></button>
        </form>
      </div>
    </Layout>
  )
}

export default LoginScreen
