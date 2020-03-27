import React from 'react';
// import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import './layout.css';
import Footer from './footer';
import Header from './header';

class Layout extends React.Component {
  render() {
    const { children, bar } = this.props;
    console.log('bar = ', bar);

    return (
      <StaticQuery
        query={notFoundPageQuery2}
        render={(data) => (
          <div className="layout">
            <header className="siteHeader">
              <Header />
            </header>
            <div>{bar && bar()}</div>
            <main className="main">{children}</main>
            <footer className="footer">
              <Footer />
            </footer>
          </div>
        )}
      />
    );
  }
}

const notFoundPageQuery2 = graphql`
  query NotFoundPage2 {
    background: file(absolutePath: { regex: "/404.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Layout;
