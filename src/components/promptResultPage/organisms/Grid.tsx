import React from "react"
import classes from "./Grid.module.css"

export default function Grid({children}: {children: React.ReactNode}) {
  return <div className={classes.container}>{children}</div>
}
