import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import "./layout.css"
import { rhythm } from "../utils/typography"

// move this to it's own component
function Header() {
  return (
    <StaticQuery
      query={logoQuery}
      render={data => {
        return (
          <nav>
            <Link to="/" style={{ boxShadow: "none" }}>
              <Image
                fixed={data.image.childImageSharp.fixed}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: "100%",
                }}
                imgStyle={{
                  borderRadius: "50%",
                }}
              />
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

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <header className="siteHeader">
          <Header />
        </header>
        <main className="main">{children}</main>
        <footer className="footer">
          <p>
            © {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a> and ❤️
          </p>
          <ul>
            <li>
              <a href="https://twitter.com/richarddubay">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/richarddubay/">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/richarddubay">Facebook</a>
            </li>
            <li>
              <a href="https://github.com/richarddubay">Github</a>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
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

export default Layout
