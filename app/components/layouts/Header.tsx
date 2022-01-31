import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/">
        <h1>Happiness Graph</h1>
      </a>
      <h1>This project is under construction, and yet unfinished.</h1>
    </header>
  )
}

export default Header
