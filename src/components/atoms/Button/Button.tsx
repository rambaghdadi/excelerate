import {StyledButton} from "./Button.styles"

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  $transparent?: boolean
}

export default function Button({
  children,
  type = "button",
  ...props
}: IButtonProps) {
  return <StyledButton {...{type, ...props}}>{children}</StyledButton>
}
