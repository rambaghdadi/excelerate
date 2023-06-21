"use client"
import Button from "@/components/general/atoms/Button/Button"
import Link from "next/link"
import {styled} from "styled-components"

const StyledMain = styled.main`
  height: calc(100vh - 130px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  width: 40rem;
  margin: 0 auto;
  text-align: center;

  & > h1 {
    font-size: 2.5rem;
    line-height: 1.4;
  }

  & > p {
    font-size: 1.4rem;
    color: #ffffffc0;
  }

  & > button {
    font-size: 1rem;
  }
`

export default function Hero() {
  return (
    <StyledMain>
      <p>AI-Powered Planning</p>
      <h1>A new way to kickstart projects within seconds</h1>
      <Link href={"/prompt"}>
        <Button>Explore the future</Button>
      </Link>
    </StyledMain>
  )
}
