import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from "../components/articles"

const BlogIndex = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const articles = data.allMicrocmsArticles.nodes

  return (
    <>
      <SEO title="TOP" />
      <Layout location={props.location} title={siteTitle}>
        {articles.map(article => (
          <Articles key={article.articlesId} article={article} />
        ))}
      </Layout>
    </>
  )
}

export default BlogIndex

export const query = graphql`
  {
    allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }, limit: 5) {
      nodes {
        id
        title
        description
        thumbnail {
          url
        }
        category {
          id
          name
        }
        articlesId
        body
        publishedAt
      }
    }
    allMicrocmsCategories {
      nodes {
        id
        categoriesId
        name
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
