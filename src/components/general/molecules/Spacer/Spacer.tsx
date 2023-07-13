import classes from "./Spacer.module.css"

interface ISpacerProps {
  children: React.ReactNode
  isFullWidth?: boolean
  flexDirection?: "column" | "row"
  gap?: number
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
}

export default function Spacer({
  children,
  isFullWidth = false,
  flexDirection = "row",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  gap = 1,
}: ISpacerProps) {
  const spacerStyles = {
    flexDirection,
    alignItems,
    justifyContent,
    width: isFullWidth ? "100%" : "auto",
    gap: `${gap}rem`,
  }
  return (
    <div className={classes.container} style={spacerStyles}>
      {children}
    </div>
  )
}
