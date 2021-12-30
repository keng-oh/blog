import React from "react"
import { graphql } from "gatsby"
import { Archives } from "../components/pages"

const ArchivesPage = props => <Archives data={props.data} />
export default ArchivesPage

export const pageQuery = graphql`
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
