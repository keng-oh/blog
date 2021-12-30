import React from "react"
import { graphql } from "gatsby"
import { Top } from "../components/pages"

const IndexPage = props => {
  console.log(props)
  return <Top data={props.data} />
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }, limit: 9) {
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
