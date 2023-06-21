import {StyledButton} from "./Button.styles"
import type {StyledButtonProps} from "./Button.styles"

interface IButtonProps
  extends Partial<StyledButtonProps>,
    React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({
  children,
  $bgColor = "primary",
  $textColor = "white",
  type = "",
  ...props
}: IButtonProps) {
  return (
    <StyledButton {...{...props, $bgColor, $textColor, type}}>
      {children}
    </StyledButton>
  )
}
