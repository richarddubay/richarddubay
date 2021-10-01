import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

function Header() {
  return (
    <nav>
      <Link to="/" className="logo">
        <StaticImage src="../../content/assets/logo_black.png" alt="logo" />
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
}

export default Header;
