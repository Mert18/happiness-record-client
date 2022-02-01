import type { NextPage } from 'next'
import classes from './Register.module.css'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import Loader from '../../app/components/modules/loader'

const Register: NextPage = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordAgain, setPasswordAgain] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [loader, setLoader] = useState(false)

  const handleSubmit = async (e: any) => {
    console.log(process.env.NEXT_PUBLIC_SERVER_URL)
    e.preventDefault()
    if (password != passwordAgain) {
      console.log('Passwords are not identical.')
      setMessage('Passwords are not identical.')
    } else {
      setLoader(true)
      await axios({
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/signup`,
        data: { username, email, password },
      })
        .then((res) => {
          console.log('SIGN UP SUCCESS', res)
          setMessage(res.data.message)
          setLoader(false)
        })
        .catch((err) => {
          console.log('Sign Up error', err.response.data)
          setLoader(false)
          setMessage(err.response.data.error)
        })
    }
  }

  return (
    <div className={classes.register}>
      <Head>
        <title>Happiness Record - Register Page</title>
        <meta name="description" content="Happiness Record Register Page" />
      </Head>
      <div className={classes.backhome}>
        <Link href="/">Home</Link>
      </div>

      {message ? (
        <div className={classes.messagebox}>
          <p>{message}</p>
        </div>
      ) : (
        ''
      )}

      <div className={classes.register__form}>
        <form className={classes.form}>
          <div className={classes.inputs}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setUsername(e.target.value)}
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

          {loader ? <Loader /> : <button onClick={handleSubmit}></button>}
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
