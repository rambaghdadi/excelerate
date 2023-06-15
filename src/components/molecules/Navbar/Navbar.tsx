import Link from "next/link"
import {styled} from "styled-components"

const StyledList = styled.ul`
  display: flex;
  gap: 1rem;
`

export default function Navbar() {
  const links = [
    {name: "Product", url: "product"},
    {name: "Pricing", url: "pricing"},
    {name: "How it works", url: "how-it-works"},
  ]

  return (
    <nav>
      <StyledList>
        {links.map(({name, url}) => (
          <Link
            style={{
              color: "white",
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
            key={url}
            href={"/" + url}
          >
            {name}
          </Link>
        ))}
      </StyledList>
    </nav>
  )
}
