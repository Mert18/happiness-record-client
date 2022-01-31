import { NextPage } from 'next'
import classes from '../../styles/Activation.module.css'
import { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { useRouter } from 'next/router'

const AccountActivation: NextPage = () => {
  const [name, setName] = useState<string>('')
  const router = useRouter()
  const token: any = router.query.slug
  console.log(jwt.decode(token))

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/account-activation`,
      data: { token },
    })
      .then((res) => {
        console.log('Account Activation', res)
      })
      .catch((err) => {
        console.log('Account activation error', err.response.data.error)
      })
  }

  return (
    <div className={classes.activation}>
      <div>
        <h1>Hey {name}, click the button to activate your account.</h1>
        <button onClick={handleSubmit}>Activate</button>
      </div>
    </div>
  )
}

export default AccountActivation
