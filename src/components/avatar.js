import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Avatar() {
  return (
    <StaticQuery
      query={avatarQuery}
      render={data => {
        return (
          <div>
            <Image fixed={data.avatar.childImageSharp.fixed} />
          </div>
        )
      }}
    />
  )
}

const avatarQuery = graphql`
  query AvatarQuery {
    avatar: file(absolutePath: { regex: "/rich_heav.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Avatar
