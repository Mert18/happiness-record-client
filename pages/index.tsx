import type { NextPage } from 'next'
import Head from 'next/head'
import classes from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={classes.home}>
      <Head>
        <title>Happiness Record - Home Page</title>
        <meta name="description" content="Happiness Record" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={classes.home__header}>
        <h2>Find your source of happiness</h2>
      </section>
      <section className={classes.home__content}>
        <article className={classes.home__content__text}>
          <div className={classes.home__content__text__text}>
            <p>
              It is simple. Everyday you are asked to enter some values. By
              time, you are goting to find out what makes you happy.
            </p>
          </div>
          <div className={classes.home__content__text__buttons}>
            <button>
              <Link href="/register">Register</Link>
            </button>
            <button>
              <Link href="/login">Login</Link>
            </button>
          </div>
        </article>
        <article className={classes.home__content__ills}>
          <div className={classes.home__content__ills__ill}>
            <p>Illustration</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Home
