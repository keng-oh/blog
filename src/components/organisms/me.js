import React from "react"
import { graphql } from "gatsby"

import { Typography, Container, makeStyles, Paper } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  paperWrapper: { padding: theme.spacing(0) },
  paperOutline: { padding: theme.spacing(2) },
}))

export const Me = props => {
  const classes = useStyles()

  return (
    <Container className={classes.paperWrapper}>
      <Paper elevation="3" className={classes.paperOutline}>
        <Typography gutterBottom variant="h5">
          経歴
        </Typography>
        TODO: ここに経歴を書く
      </Paper>
    </Container>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
