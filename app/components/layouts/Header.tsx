import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/">
        <h1>Happiness Graph</h1>
      </a>
    </header>
  )
}

export default Header
