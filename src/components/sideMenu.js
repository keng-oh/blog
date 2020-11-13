import React from 'react'

import Bio from './bio'

import { Grid } from "@material-ui/core"

const SideMenu = () => {
  return (
    <Grid item lg={3}>
      <Bio />
    </Grid>
  )
}

export default SideMenu