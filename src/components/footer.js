import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

function Footer() {
  return (
    <>
      <p>
        © {new Date().getFullYear()}, Built with{" "}
        <OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink> and
        ❤️
      </p>
      <ul>
        <li>
          <OutboundLink href="https://twitter.com/richarddubay">
            Twitter
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.instagram.com/richarddubay/">
            Instagram
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.facebook.com/richarddubay">
            Facebook
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://github.com/richarddubay">
            Github
          </OutboundLink>
        </li>
      </ul>
    </>
  )
}

export default Footer
