import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"

// Component Imports
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    const previousYear = previous
      ? moment(previous.frontmatter.date, "YYYY-MM-DD").format("YYYY")
      : null
    const previousMonth = previous
      ? moment(previous.frontmatter.date, "YYYY-MM-DD").format("MM")
      : null
    const previousDay = previous
      ? moment(previous.frontmatter.date, "YYYY-MM-DD").format("DD")
      : null
    const nextYear = next
      ? moment(next.frontmatter.date, "YYYY-MM-DD").format("YYYY")
      : null
    const nextMonth = next
      ? moment(next.frontmatter.date, "YYYY-MM-DD").format("MM")
      : null
    const nextDay = next
      ? moment(next.frontmatter.date, "YYYY-MM-DD").format("DD")
      : null

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="article">
          <h1 className="postTitle">{post.frontmatter.title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <footer>
            <small>{post.frontmatter.date}</small>
          </footer>
        </div>
        <div className="article pagination">
          <ul>
            <li>
              {previous && (
                <Link
                  to={
                    "/" +
                    previousYear +
                    "/" +
                    previousMonth +
                    "/" +
                    previousDay +
                    previous.fields.slug
                  }
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link
                  to={
                    "/" +
                    nextYear +
                    "/" +
                    nextMonth +
                    "/" +
                    nextDay +
                    next.fields.slug
                  }
                  rel="next"
                >
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const blogPostTemplateQuery = graphql`
  query BlogPostTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
