import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Archives extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Archives"
          keywords={["blog", "gatsby", "javascript", "react"]}
        />
        <section className="archives">
          <div className="archiveContent">
            <h1 className="postTitle">Archives</h1>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
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
                  <div>
                    <p>
                      <Link
                        style={{ boxShadow: "none" }}
                        to={
                          "/" +
                          year +
                          "/" +
                          month +
                          "/" +
                          day +
                          node.fields.slug
                        }
                      >
                        {title}
                      </Link>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </Layout>
    )
  }
}

export default Archives

export const archivesPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
