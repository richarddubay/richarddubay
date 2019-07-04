import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import SEO from "../components/seo"

class TagsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const group = data.allMarkdownRemark.group
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Tags"
          keywords={["blog", "gatsby", "javascript", "react"]}
        />
        <section className="tags">
          <div className="tagContent">
            <h1>Tags</h1>
            {group.map(tag => (
              <div className="article" key={tag.fieldValue}>
                <p>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
