import {css, styled} from "styled-components"

interface StyledButtonProps extends React.HTMLProps<HTMLButtonElement> {
  $transparent?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>(
  ({$transparent}) => css`
    outline: none;
    border: none;
    padding: 0.4em 0.8em;
    border-radius: 24px;
    background-color: ${$transparent ? "transparent" : "white"};
    ${$transparent && `border: 1px solid white;`}
    font-weight: 500;
    color: ${$transparent ? "white" : "black"};
  `
)
