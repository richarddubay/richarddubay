import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import moment from 'moment';

// Component Imports
import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogListTemplate extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
      currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString();
    const nextPage = '/page/' + (currentPage + 1).toString();

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const year = moment(node.frontmatter.date, 'YYYY-MM-DD').format(
            'YYYY'
          );
          const month = moment(node.frontmatter.date, 'YYYY-MM-DD').format(
            'MM'
          );
          const day = moment(node.frontmatter.date, 'YYYY-MM-DD').format('DD');
          const footerDate = moment(node.frontmatter.date, 'YYYY-MM-DD').format(
            'MMMM DD, YYYY'
          );
          const tags = node.frontmatter.tags;
          const tagList = tags.map((tag, index) => {
            return (
              <span key={index}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                {index === tags.length - 1 ? '' : ' / '}
              </span>
            );
          });
          return (
            <div className="article" key={node.fields.slug}>
              <div>
                <h1 className="postTitle">
                  <Link
                    style={{ boxShadow: 'none' }}
                    to={'/' + year + '/' + month + '/' + day + node.fields.slug}
                  >
                    {title}
                  </Link>
                </h1>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: node.html,
                  }}
                />
              </div>
              <footer className="postFooter">
                <small>{footerDate}</small>
                <small className="footerTags">{tagList}</small>
              </footer>
            </div>
          );
        })}
        <div className="article pagination">
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
    );
  }
}

export default BlogListTemplate;

export const blogListTemplateQuery = graphql`
  query BlogListTemplate($skip: Int!, $limit: Int!) {
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
            tags
          }
          html
        }
      }
    }
  }
`;
