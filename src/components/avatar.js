import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

function Avatar() {
  return (
    <StaticQuery
      query={avatarQuery}
      render={(data) => {
        return (
          <div>
            <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} />
          </div>
        );
      }}
    />
  );
}

const avatarQuery = graphql`query AvatarQuery {
  avatar: file(absolutePath: {regex: "/rich_heav.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
    }
  }
}
`;

export default Avatar;
