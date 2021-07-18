import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './styles/globals.css'
import App from './App'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import Dashboard from './screens/Dashboard'
import Feed from './screens/Feed'

const Routes = () => {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/authentication/verify`,
        {
          method: 'POST',
          headers: { jwt_token: localStorage.token },
        }
      )

      const parseRes = await res.json()

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    checkAuthenticated()
  }, [])

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) =>
            isAuthenticated ? (
              <Dashboard {...props} setAuth={setAuth} />
            ) : (
              <App />
            )
          }
        />

        <Route
          path="/dashboard"
          render={(props) =>
            isAuthenticated ? (
              <Dashboard {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          path="/register"
          render={(props) =>
            !isAuthenticated ? (
              <RegisterScreen {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />
        <Route
          path="/login"
          render={(props) =>
            !isAuthenticated ? (
              <LoginScreen {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />

        <Route
          path="/feed"
          render={(props) =>
            isAuthenticated ? (
              <Feed {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
