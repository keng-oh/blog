import React from "react"
import { graphql } from "gatsby"

const NotFoundPage = props => <></>

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
