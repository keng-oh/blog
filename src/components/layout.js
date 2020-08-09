import React from "react"

import Header from "./header"
import Bio from "./bio"

import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
})

const Layout = props => {
  const { title, children } = props
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme} height="100%">
      <CssBaseline />
      <Container maxWidth="lg">
        <header>
          <Header title={title} />
        </header>
        <main>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="stretch"
                spacing={4}
              >
                {children}
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Bio />
            </Grid>
          </Grid>
        </main>
        <footer className={classes.footer}>
          {title} © Keng {new Date().getFullYear()}.
        </footer>
      </Container>
    </MuiThemeProvider>
  )
}

export default Layout
