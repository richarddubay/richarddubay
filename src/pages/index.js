import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={["blog", "gatsby", "javascript", "react"]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <>
              <div key={node.fields.slug}>
                <h1>
                  <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.html,
                  }}
                />
              </div>
              <footer>
                <small>{node.frontmatter.date}</small>
              </footer>
            </>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          html
        }
      }
    }
  }
`
