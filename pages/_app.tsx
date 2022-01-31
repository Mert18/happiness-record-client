import '../styles/globals.css'
import Layout from '../app/components/layouts/Layout'
import React from 'react'
import FormLayout from '../app/components/layouts/FormLayout'

const App = ({ Component, pageProps, ...appProps }) => {
  const isLayoutNeeded =
    [`/register`].includes(appProps.router.pathname) ||
    ['/login'].includes(appProps.router.pathname)

  const LayoutComponent = isLayoutNeeded ? FormLayout : Layout
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  )
}
export default App
