import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

// Component Imports
import Layout from "../components/layout"
import SEO from "../components/seo"

class TagListPage extends React.Component {
  render() {
    const group = this.props.data.allMarkdownRemark.group
    return (
      <Layout>
        <SEO
          title="Tags"
          keywords={["blog", "gatsby", "javascript", "react"]}
        />
        <section className="tags">
          <div className="tagContent">
            <h1>Tags</h1>
            {group.map(tag => (
              <div key={tag.fieldValue}>
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

export default TagListPage

export const TagListQuery = graphql`
  query TagList {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
