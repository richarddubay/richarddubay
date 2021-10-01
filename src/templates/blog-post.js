import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import dayjs from 'dayjs';

// Component Imports
import Layout from '../components/layout';
import Meta from '../components/meta';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next } = this.props.pageContext;
    const previousYear = previous
      ? dayjs(previous.frontmatter.date, 'YYYY-MM-DD').format('YYYY')
      : null;
    const previousMonth = previous
      ? dayjs(previous.frontmatter.date, 'YYYY-MM-DD').format('MM')
      : null;
    const previousDay = previous
      ? dayjs(previous.frontmatter.date, 'YYYY-MM-DD').format('DD')
      : null;
    const nextYear = next
      ? dayjs(next.frontmatter.date, 'YYYY-MM-DD').format('YYYY')
      : null;
    const nextMonth = next
      ? dayjs(next.frontmatter.date, 'YYYY-MM-DD').format('MM')
      : null;
    const nextDay = next
      ? dayjs(next.frontmatter.date, 'YYYY-MM-DD').format('DD')
      : null;
    const tags = post.frontmatter.tags;
    const tagList = tags.map((tag, index) => {
      return (
        <span key={index}>
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          {index === tags.length - 1 ? '' : ' / '}
        </span>
      );
    });

    return (
      <Layout>
        <Meta
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="article">
          <h1 className="postTitle">{post.frontmatter.title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <footer className="postFooter">
            <small>{post.frontmatter.date}</small>
            <small className="footerTags">{tagList}</small>
          </footer>
        </div>
        <div className="article pagination">
          <ul>
            <li>
              {previous && (
                <Link
                  to={
                    '/' +
                    previousYear +
                    '/' +
                    previousMonth +
                    '/' +
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
                    '/' +
                    nextYear +
                    '/' +
                    nextMonth +
                    '/' +
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
    );
  }
}

export default BlogPostTemplate;

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
        tags
      }
    }
  }
`;
