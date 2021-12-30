import React from "react"

import Grid from "@material-ui/core/Grid"

import Layout from "../layout"
import { Me } from "../organisms"

export const About = props => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle} sectionTitle="About me">
      <Grid container justify="flex-start" alignItems="stretch">
        <Me />
      </Grid>
    </Layout>
  )
}
