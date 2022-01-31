import type { NextPage } from 'next'
import classes from '../register/Register.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import Loader from '../../app/components/modules/loader'
import axios from 'axios'
import { authenticate, isAuth } from '../../app/utils/helpers'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [loader, setLoader] = useState<boolean>(false)

  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoader(true)
    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/signin`,
      data: { email, password },
    })
      .then((res) => {
        console.log('SIGN In Success', res)
        setMessage(res.data.message)
        setLoader(false)
        /*
        authenticate(res, () => {
          isAuth() && isAuth().role === 'admin'
            ? router.push('/')
            : router.push('/')
        })
         */
      })
      .catch((err) => {
        console.log('Sign In Error', err.response.data)
        setLoader(false)
        setMessage(err.response.data.error)
      })
  }
  return (
    <div className={classes.register}>
      <Head>
        <title>Happiness Record - Login Page</title>
        <meta name="description" content="Happiness Record Login Page" />
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

          {loader ? <Loader /> : <button onClick={handleSubmit}></button>}

          <Link href="/register">Register Instead</Link>
        </form>
      </div>
      <div className={classes.register__ills}>
        <Image src="/login.png" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Login
