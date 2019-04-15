import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Image from "gatsby-image"

function Header() {
  return (
    <StaticQuery
      query={logoQuery}
      render={data => {
        return (
          <nav>
            <Link to="/" className="logo">
              <Image fixed={data.image.childImageSharp.fixed} />
            </Link>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </nav>
        )
      }}
    />
  )
}

const logoQuery = graphql`
  query LogoQuery {
    image: file(absolutePath: { regex: "/logo_black.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Header
