import React from "react"
import "./layout.css"
import Footer from "./footer"
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
          <Footer />
        </footer>
      </div>
    )
  }
}

export default Layout
