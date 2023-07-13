import classes from "./Hero.module.css"

export default function Hero({children}: {children: React.ReactNode}) {
  return (
    <div className={classes.main}>
      <p>AI-Powered Planning</p>
      <h1>Coming soon, a new way to kickstart projects within seconds</h1>
      {children}
    </div>
  )
}
