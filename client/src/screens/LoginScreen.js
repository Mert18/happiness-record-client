import React from 'react'
import Layout from '../core/Layout'

const LoginScreen = () => {
  return (
    <Layout>
      <div>
        <form>
          <div>
            <label htmlFor='email'>E-mail</label>
            <input type='text' id='email' />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default LoginScreen
