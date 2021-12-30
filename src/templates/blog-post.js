import React from "react"
import { graphql } from "gatsby"
import { BlogPost } from "../components/pages"

const BlogPostTemplate = props => <BlogPost data={props.data} />
export default BlogPostTemplate

export const query = graphql`
  query($id: String!) {
    microcmsArticles(id: { eq: $id }) {
      title
      body
      publishedAt
      description
      articlesId
      category {
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
