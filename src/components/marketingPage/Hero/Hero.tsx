import classes from "./Hero.module.css"
import Button from "@/components/general/atoms/Button/Button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className={classes.main}>
      <p>AI-Powered Planning</p>
      <h1>A new way to kickstart projects within seconds</h1>
      <Link href={"/prompt"}>
        <Button>Explore the future</Button>
      </Link>
    </div>
  )
}
