import React from "react"
import { graphql } from "gatsby"
import { Category } from "../components/pages"

const CategoryTemplate = props => <Category data={props.data} />
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
