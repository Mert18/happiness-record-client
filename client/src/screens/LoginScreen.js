import React from 'react'
import Layout from '../core/Layout'

const LoginScreen = () => {
  return (
    <Layout>
      <div className="form-container">
        <form className="form">
          <div className="formgroup">
            <label htmlFor='email'>E-mail</label>
            <input type='text' id='email' />
          </div>

          <div className="formgroup">
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' />
          </div>

          <button>Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default LoginScreen
