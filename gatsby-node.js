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
        allMicrocmsCategories(sort: { fields: [id], order: ASC }) {
          edges {
            node {
              id
              categoriesId
              name
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
      path: `archives/${post.node.articlesId}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        id: post.node.id,
        ogImagePlugin: {
          title: post.node.title,
        },
      },
    })
  })

  // Create category pages.
  const categories = result.data.allMicrocmsCategories.edges

  categories.forEach((category, index) => {
    createPage({
      path: `category/${category.node.categoriesId}`,
      component: path.resolve("./src/templates/category.js"),
      context: {
        categoryId: category.node.categoriesId,
        ogImagePlugin: {
          title: category.node.name,
        },
      },
    })
  })
}
