import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div className="four-o-four">
        <SEO title="404" />
        <Image
          className="image"
          fluid={data.background.childImageSharp.fluid}
          style={{ position: `fixed` }}
        />
        <div className="text">
          <h1>404</h1>
          <p>The page you're looking for could not be found.</p>
          <div className="home">
            <Link to="/">Head back home</Link>
          </div>
        </div>
        <div className="unsplash">
          <p>
            Photo by{" "}
            <a href="https://unsplash.com/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Silas Baisch
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    background: file(absolutePath: { regex: "/404.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
