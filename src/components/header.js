import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

function Header() {
  return (
    <StaticQuery
      query={logoQuery}
      render={(data) => {
        return (
          <nav>
            <Link to="/" className="logo">
              <GatsbyImage image={data.image.childImageSharp.gatsbyImageData} />
              <h1 className="wordmark">
                Richard<span className="lastname">Dubay</span>
              </h1>
            </Link>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link className="featured" to="/archives">
                  Archives
                </Link>
              </li>
            </ul>
          </nav>
        );
      }}
    />
  );
}

const logoQuery = graphql`
  query LogoQuery {
    image: file(absolutePath: { regex: "/logo_black.png/" }) {
      childImageSharp {
        gatsbyImageData(width: 50, height: 50, layout: FIXED)
      }
    }
  }
`;

export default Header;
