import type { NextPage } from 'next'
import classes from '../register/Register.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const Login: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className={classes.register}>
      <Head>
        <title>Happiness Record - Login Page</title>
        <meta name="description" content="Happiness Record Login Page" />
      </Head>

      <div className={classes.register__form}>
        <form className={classes.form}>
          <div className={classes.inputs}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={classes.inputs}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button></button>
          <Link href="/register">Register Instead</Link>
        </form>
      </div>
      <div className={classes.register__ills}></div>
    </div>
  )
}

export default Login
