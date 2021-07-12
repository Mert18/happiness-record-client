import React from 'react'
import Layout from '../core/Layout'
import '../styles/forms.css';

const RegisterScreen = () => {
  return (
    <Layout>
      <div className="form-container">
        <form className="form">
          <div className="formgroup">
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>

          <div className="formgroup">
            <label htmlFor='email'>E-mail</label>
            <input type='text' id='email' />
          </div>

          <div className="formgroup">
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' />
          </div>

          <div className="formgroup">
            <label htmlFor='password2'>Re-Password</label>
            <input type='text' id='password2' />
          </div>

          <button>Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default RegisterScreen
