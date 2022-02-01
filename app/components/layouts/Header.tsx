import classes from './Header.module.css'
import { isAuth } from '../../utils/helpers'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const Header = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  useEffect(() => {
    if (Cookies.get('token')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <header className={classes.header}>
      {isAuth ? (
        <a href="/feed">
          <h1>Happiness Graph</h1>
        </a>
      ) : (
        <a href="/">
          <h1>Happiness Graph</h1>
        </a>
      )}
      <h1>This project is under construction, and yet unfinished.</h1>
    </header>
  )
}

export default Header
