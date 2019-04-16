import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/" : "/page/" + (currentPage - 1).toString()
    const nextPage = "/page/" + (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={["blog", "gatsby", "javascript", "react"]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const year = moment(node.frontmatter.date, "YYYY-MM-DD").format(
            "YYYY"
          )
          const month = moment(node.frontmatter.date, "YYYY-MM-DD").format("MM")
          const day = moment(node.frontmatter.date, "YYYY-MM-DD").format("DD")
          const footerDate = moment(node.frontmatter.date, "YYYY-MM-DD").format(
            "MMMM DD, YYYY"
          )
          return (
            <div key={node.fields.slug}>
              <div>
                <h1 className="postTitle">
                  <Link
                    style={{ boxShadow: "none" }}
                    to={"/" + year + "/" + month + "/" + day + node.fields.slug}
                  >
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
                <small>{footerDate}</small>
              </footer>
            </div>
          )
        })}
        <div className="pagination">
          <ul>
            <li>
              {!isLast && (
                <Link to={nextPage} rel="next">
                  ← Older Posts
                </Link>
              )}
            </li>
            <li>
              {!isFirst && (
                <Link to={prevPage} rel="prev">
                  Newer Posts →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            description
          }
          html
        }
      }
    }
  }
`
