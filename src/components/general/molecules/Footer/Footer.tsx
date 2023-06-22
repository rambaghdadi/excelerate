import classes from "./Footer.module.css"
import Logo from "../../../../../public/images/logo/Logo"

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Logo />
      <p>Experience the next generation of project planning.</p>
    </footer>
  )
}
