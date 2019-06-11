import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div className="four-o-four">
        <SEO title="404: Not Found" />
        <Image
          className="image"
          fluid={data.background.childImageSharp.fluid}
          style={{ position: `fixed` }}
        />
        <div className="text">
          <h1>404</h1>
          <p>The page you're looking for could not be found.</p>
        </div>
        <div className="unsplash">
          <p>
            Photo by{" "}
            <a href="https://unsplash.com/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Silas Baisch
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash.
            </a>
          </p>
        </div>
      </div>
    )
  }
}

// Photo by Silas Baisch on Unsplash
// https://unsplash.com/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
// https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
//
// Unsplash Credit Badge
// <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@silasbaisch?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Silas Baisch"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Silas Baisch</span></a>

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
