import React from "react"
import "./layout.css"
import Header from "./header"

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

export default Layout
