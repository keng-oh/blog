const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              createdAt
              title
              body
              articlesId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMicrocmsArticles.edges

  posts.forEach((post, index) => {
    createPage({
      path: post.node.articlesId,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        id: post.node.id,
      },
    })
  })
}
