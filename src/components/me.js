import React from "react"
import { graphql } from "gatsby"

import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
  paperWrapper: { padding: theme.spacing(0) },
  paperOutline: { padding: theme.spacing(2) },
}))

const Me = props => {
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
