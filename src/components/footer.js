import React from "react"

function Footer() {
  return (
    <>
      <p>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and ❤️
      </p>
      <ul>
        <li>
          <a href="https://twitter.com/richarddubay">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/richarddubay/">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/richarddubay">Facebook</a>
        </li>
        <li>
          <a href="https://github.com/richarddubay">Github</a>
        </li>
      </ul>
    </>
  )
}

export default Footer
