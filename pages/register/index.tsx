import type { NextPage } from 'next'
import classes from './Register.module.css'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Register: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  return (
    <div className={classes.register}>
      <Head>
        <title>Happiness Record - Register Page</title>
        <meta name="description" content="Happiness Record Register Page" />
      </Head>
      <div className={classes.backhome}>
        <Link href="/">Home</Link>
      </div>

      <div className={classes.register__form}>
        <form className={classes.form}>
          <div className={classes.inputs}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <div className={classes.inputs}>
            <label htmlFor="passwordagain">Password Again</label>
            <input
              type="password"
              id="passwordagain"
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
          </div>

          <button></button>
          <Link href="/login">Login Instead</Link>
        </form>
      </div>
      <div className={classes.register__ills}>
        <Image src="/reg.png" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Register