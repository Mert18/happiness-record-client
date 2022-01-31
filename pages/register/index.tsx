import classes from './Register.module.css'
import { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  return (
    <div className={classes.register}>
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
        </form>
      </div>
      <div className={classes.register__ills}></div>
    </div>
  )
}

export default Register
