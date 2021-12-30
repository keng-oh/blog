import React from "react"
import { graphql } from "gatsby"
import { NotFound } from "../components/pages"

const NotFoundPage = props => <NotFound data={props.data} />
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
