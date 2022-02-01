import { NextPage } from 'next'
import classes from '../../styles/Activation.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import Loader from '../../app/components/modules/loader'

const AccountActivation: NextPage = () => {
  const [name, setName] = useState<string>('')
  const router = useRouter()
  const token: any = router.query.slug
  const [message, setMessage] = useState<string>('')
  const [loader, setLoader] = useState<boolean>(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/account-activation`,
      data: { token },
    })
      .then((res) => {
        console.log('Account Activation', res)
        setMessage(res.data.message)
        setLoader(false)
      })
      .catch((err) => {
        console.log('Account activation error', err.response.data.error)
        setMessage(err.response.data.error)
        setLoader(false)
      })
  }

  return (
    <div className={classes.activation}>
      {message ? (
        <div className={classes.activation__message}>
          <p>{message}</p>
        </div>
      ) : (
        ''
      )}
      <div className={classes.activation__box}>
        <h1>Hey {name}, click the button to activate your account.</h1>
        {loader ? <Loader /> : <button onClick={handleSubmit}></button>}
      </div>

      <div className={classes.activation__signin}>
        <Link href="/login">Sign In</Link>
      </div>
    </div>
  )
}

export default AccountActivation
