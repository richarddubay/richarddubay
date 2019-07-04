import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Tags extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={tag} keywords={["blog", "gatsby", "javascript", "react"]} />
        <section className="tags">
          <div className="tagContent">
            <h1 className="postTitle">{tagHeader}</h1>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              const year = moment(node.frontmatter.date, "YYYY-MM-DD").format(
                "YYYY"
              )
              const month = moment(node.frontmatter.date, "YYYY-MM-DD").format(
                "MM"
              )
              const day = moment(node.frontmatter.date, "YYYY-MM-DD").format(
                "DD"
              )
              return (
                <div className="article" key={node.fields.slug}>
                  <p>
                    <Link to={"/" + year + "/" + month + "/" + day + slug}>
                      {title}
                    </Link>
                  </p>
                </div>
              )
            })}
            <Link to="/tags">All tags</Link>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
          }
        }
      }
    }
  }
`
