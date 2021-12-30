import React from "react"
import { graphql } from "gatsby"
import { About } from "../components/pages"

const AboutPage = props => <About data={props.data} />
export default AboutPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
