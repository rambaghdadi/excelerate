import classes from "./Header.module.css"
import Button from "@/components/general/atoms/Button/Button"
import Logo from "../../../../../public/images/logo/Logo"
import Navbar from "../Navbar/Navbar"

export default function Header() {
  return (
    <div className={classes.main}>
      <Logo />
      <Navbar />
      <div className={classes.buttonContainer}>
        <Button $bgColor="transparent">Sign Up</Button>
        <Button $bgColor="white" $textColor="black">
          Enterprise
        </Button>
      </div>
    </div>
  )
}
