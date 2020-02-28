/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title, image, siteUrl }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
            social {
              facebook {
                shareImage
              }
              twitter {
                profileName
                shareImage
              }
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const facebookMetaImage =
    image || site.siteMetadata.social.facebook.shareImage;
  const twitterMetaImage = image || site.siteMetadata.social.twitter.shareImage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      image={facebookMetaImage}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.siteUrl}${facebookMetaImage}`,
        },
        {
          property: 'og:image:width',
          content: '1700',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: `${site.siteMetadata.siteUrl}${twitterMetaImage}`,
        },
        {
          name: 'twitter:site',
          content: site.siteMetadata.social.twitter.profileName,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  description: '',
  keywords: [],
  lang: 'en',
  meta: [],
  title: '',
  image: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
