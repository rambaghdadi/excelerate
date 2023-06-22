import Link from "next/link"
import classes from "./Navbar.module.css"

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
      <ul className={classes.linkList}>
        {links.map(({name, url}) => (
          <Link style={linkStyles} key={url} href={"/" + url}>
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  )
}
