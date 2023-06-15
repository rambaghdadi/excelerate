"use client"
import {styled} from "styled-components"
import Logo from "../../../../public/images/logo/Logo"

const StyledFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 5rem;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.2) 0%,
      #ffffff 50%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }

  & > p {
    max-width: 20rem;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <p>Experience the next generation of project planning.</p>
    </StyledFooter>
  )
}
