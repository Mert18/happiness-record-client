import classes from './Loader.module.css'

const Loader = () => {
  return (
    <div className={classes.orange__spinner}>
      <div className={classes.orange__bubble}></div>
      <div className={classes.black__bubble}></div>
    </div>
  )
}

export default Loader
