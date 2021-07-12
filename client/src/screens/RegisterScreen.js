import React from 'react'
import Layout from '../core/Layout'
import '../styles/forms.css';

const RegisterScreen = () => {
  return (
    <Layout>
      <div className="form-container" id="regcon">
        <form className="form" id="regform">
            <h2>Register</h2>
            <input type='text' id='username' placeholder="username" />
            <input type='text' placeholder="email" id='email' />
            <input type='text' placeholder="password" id='password' />
            <input type='text' placeholder="password" id='password2' />
          <button id="regbut"></button>
        </form>
      </div>
    </Layout>
  )
}

export default RegisterScreen
