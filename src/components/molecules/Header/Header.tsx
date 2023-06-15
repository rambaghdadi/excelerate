"use client"
import Button from "@/components/atoms/Button/Button"
import Logo from "../../../../public/images/logo/Logo"
import Navbar from "../Navbar/Navbar"
import styled from "styled-components"

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.6rem;
  border-radius: 24px;
  margin: 20px 0;
`

const StyledCTAButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <StyledCTAButtonContainer>
        <Button>Sign Up</Button>
        <Button $transparent={true}>Enterprise</Button>
      </StyledCTAButtonContainer>
    </StyledHeader>
  )
}
