import React from "react"
import { graphql } from "gatsby"

import Typography from "@material-ui/core/Typography"

const Me = props => {
  return (
    <Typography variant="h5" gutterBottom>
      about me
    </Typography>
  )
}

export default Me

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
