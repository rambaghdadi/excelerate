import styled, {css} from "styled-components"

export interface StyledButtonProps {
  $bgColor: keyof typeof backgroundColor
  $textColor: keyof typeof color
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

export const StyledButton = styled.button<StyledButtonProps>(
  ({$bgColor, $textColor}) => css`
    cursor: pointer;
    font-size: 16px;
    outline: none;
    border: none;
    padding: 0.4em 0.8em;
    border-radius: 24px;
    color: ${color[$textColor]};
    background-color: ${backgroundColor[$bgColor]};
    font-weight: 500;
    ${backgroundColor[$bgColor] === "transparent" && `border: 1px solid white;`}
    transition: all 0.2s;

    &:hover {
      background-color: #005c89;
      color: #fff;
    }

    &:active {
      transform: translate(0, 2px);
    }
  `
)
