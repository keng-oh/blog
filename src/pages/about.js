import React from "react"
import { graphql } from "gatsby"

import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Me from "../components/me"

const About = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <SEO title="ABOUT" />
      <Layout
        location={props.location}
        title={siteTitle}
        sectionTitle="About me"
      >
        <Grid container justify="flex-start" alignItems="stretch">
          <Me />
        </Grid>
      </Layout>
    </>
  )
}

export default About

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
