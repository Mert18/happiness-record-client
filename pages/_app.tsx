import { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../app/components/layouts/Layout'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component {...pageProps} />
  </Layout>
)

export default App
