import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment';

// Component Imports
import Layout from '../components/layout';
import Meta from '../components/meta';

class Archives extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <Meta
          title="Archives"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        <section className="archives">
          <div className="archiveContent">
            <h1>Archives</h1>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
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
                  <div>
                    <p>
                      <Link
                        style={{ boxShadow: 'none' }}
                        to={
                          '/' +
                          year +
                          '/' +
                          month +
                          '/' +
                          day +
                          node.fields.slug
                        }
                      >
                        {title}
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    );
  }
}

export default Archives;

export const archivesPageQuery = graphql`
  query ArchivesPage {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
