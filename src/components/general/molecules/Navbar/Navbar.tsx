import Link from "next/link"
import {styled} from "styled-components"

const StyledList = styled.ul`
  display: flex;
  gap: 1rem;
`

export default function Navbar() {
  const links = [
    {name: "Product", url: "prompt"},
    {name: "Pricing", url: "pricing"},
    {name: "How it works", url: "how-it-works"},
  ]

  const linkStyles = {
    color: "white",
    fontWeight: 500,
  }

  return (
    <nav>
      <StyledList>
        {links.map(({name, url}) => (
          <Link style={linkStyles} key={url} href={"/" + url}>
            {name}
          </Link>
        ))}
      </StyledList>
    </nav>
  )
}
