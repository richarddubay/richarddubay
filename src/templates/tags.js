import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment';

// Component Imports
import Layout from '../components/layout';
import SEO from '../components/seo';

class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const { edges, totalCount } = this.props.data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`;

    return (
      <Layout>
        <SEO title={tag} keywords={['blog', 'gatsby', 'javascript', 'react']} />
        <section className="tags">
          <div className="tagContent">
            <h1>{tagHeader}</h1>
            {edges.map(({ node }) => {
              const { slug } = node.fields;
              const { title } = node.frontmatter;
              const year = moment(node.frontmatter.date, 'YYYY-MM-DD').format(
                'YYYY'
              );
              const month = moment(node.frontmatter.date, 'YYYY-MM-DD').format(
                'MM'
              );
              const day = moment(node.frontmatter.date, 'YYYY-MM-DD').format(
                'DD'
              );
              return (
                <div key={node.fields.slug}>
                  <p>
                    <Link to={'/' + year + '/' + month + '/' + day + slug}>
                      {title}
                    </Link>
                  </p>
                </div>
              );
            })}
            <p className="allTags">
              <Link to="/tags">Go to all tags</Link>
            </p>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagTemplate;

export const tagTemplateQuery = graphql`
  query TagTemplate($tag: String) {
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
`;
