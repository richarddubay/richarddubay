const moment = require("moment")
const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogListTemplate = path.resolve("./src/templates/blog-list.js")
  const blogPostTemplate = path.resolve("./src/templates/blog-post.js")
  const tagsTemplate = path.resolve("./src/templates/tags.js")
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "YYYY/MM/DD")
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    // Create the blog list page.
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/page/${i + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // Create the blog post pages
    posts.forEach((post, index) => {
      const year = moment(post.node.frontmatter.date, "YYYY-MM-DD").format(
        "YYYY"
      )
      const month = moment(post.node.frontmatter.date, "YYYY-MM-DD").format(
        "MM"
      )
      const day = moment(post.node.frontmatter.date, "YYYY-MM-DD").format("DD")
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: year + "/" + month + "/" + day + post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create the tag pages
    let tags = []

    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(post => {
      if (post.node.frontmatter.tags) {
        tags = tags.concat(post.node.frontmatter.tags)
      }
    })

    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagsTemplate,
        context: {
          tag,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}
