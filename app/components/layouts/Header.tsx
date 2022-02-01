import classes from './Header.module.css'
import { isAuth } from '../../utils/helpers'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState<boolean>(false)
  useEffect(() => {
    if (Cookies.get('token')) {
      setIsAuth(true)
    }
  }, [])

  const logoutHandler = () => {
    Cookies.remove('token')
    router.push('/')
    router.reload()
  }

  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <Link href={isAuth ? '/feed' : '/'}>
          <h1>Happiness Graph</h1>
        </Link>
      </div>
      <nav className={classes.header__nav}>
        {isAuth ? (
          <ul>
            <li>
              <Link href="/feed">Feed</Link>
            </li>

            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        ) : (
          ''
        )}
      </nav>
    </header>
  )
}

export default Header
