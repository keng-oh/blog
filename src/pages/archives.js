import React from "react"
import { graphql } from "gatsby"

import { Grid } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from "../components/articles"

const Archives = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const articles = data.allMicrocmsArticles.nodes

  return (
    <>
      <SEO title="ARCHIVES" />
      <Layout
        location={props.location}
        title={siteTitle}
        sectionTitle="Archives"
      >
        <Grid container justify="flex-start" alignItems="stretch" spacing={4}>
          {articles.map(article => (
            <Articles key={article.articlesId} article={article} />
          ))}
        </Grid>
      </Layout>
    </>
  )
}

export default Archives

export const query = graphql`
  {
    allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }) {
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
