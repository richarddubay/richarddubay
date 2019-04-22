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
              <Image fluid={data.image.childImageSharp.fluid} />
            </Link>
            <h1 className="wordmark">
              Richard<span className="lastname">Dubay</span>
            </h1>
            <ul>
              <li>
                <Link to="/about">About</Link>
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
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Header
