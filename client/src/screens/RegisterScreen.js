import React from 'react'
import Layout from '../core/Layout'

const RegisterScreen = () => {
  return (
    <Layout>
      <div>
        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>

          <div>
            <label htmlFor='email'>E-mail</label>
            <input type='text' id='email' />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' />
          </div>

          <div>
            <label htmlFor='password2'>Re-Password</label>
            <input type='text' id='password2' />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default RegisterScreen
