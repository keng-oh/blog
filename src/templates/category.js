import React from "react"
import { graphql } from "gatsby"

import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from "../components/articles"

const CategoryTemplate = props => {
  const articles = props.data.allMicrocmsArticles.nodes
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <>
      <SEO title={"CATEGORY"} />
      <Layout
        location={props.location}
        title={siteTitle}
        sectionTitle={"Category"}
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

export default CategoryTemplate

export const query = graphql`
  query($categoryId: String!) {
    allMicrocmsArticles(
      filter: { category: { elemMatch: { id: { eq: $categoryId } } } }
    ) {
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
