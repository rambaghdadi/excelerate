import classes from "./Button.module.css"

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  type?: "submit" | "button"
  $bgColor?: keyof typeof backgroundColor
  $textColor?: keyof typeof color
}

const color = {
  white: "#fff",
  black: "#333",
}

const backgroundColor = {
  primary: "#00aaff",
  secondary: "#00ff7b",
  white: "#fff",
  transparent: "transparent",
}

export default function Button({
  children,
  $bgColor = "primary",
  $textColor = "white",
  type = "button",
  ...props
}: IButtonProps) {
  const buttonStyles = {
    backgroundColor: backgroundColor[$bgColor],
    color: color[$textColor],
    border:
      backgroundColor[$bgColor] === "transparent" ? "1px solid white" : "none",
  }

  return (
    <button
      className={classes.button}
      style={buttonStyles}
      {...{...props, type}}
    >
      {children}
    </button>
  )
}
