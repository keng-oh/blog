import React from 'react'

import { Grid, Typography, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  content: {
    width: "100%",
  },
  sectionTitle: {},
  sectionTitleDivider: {
    marginBottom: theme.spacing(1),
  },
}))

const ContentMain = props => {
  const classes = useStyles()
  const { sectionTitle, children } = props

  return (
    <Grid item lg={9} className={classes.content}>
      <Typography
        gutterBottom
        variant="h5"
        className={classes.sectionTitle}
      >
        {sectionTitle}
      </Typography>
      <Divider
        variant="fullWidth"
        className={classes.sectionTitleDivider}
      />
      {children}
    </Grid>
  )
}

export default ContentMain
