import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from "../components/articles"

const BlogIndex = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const articles = data.allMicrocmsArticles.edges

  return (
    <>
      <SEO title="TOP" />
      <Layout location={props.location} title={siteTitle}>
        {articles.map(article => (
          <Articles key={article.id} article={article} />
        ))}
      </Layout>
    </>
  )
}

export default BlogIndex

export const query = graphql`
  {
    allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          body
          createdAt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
