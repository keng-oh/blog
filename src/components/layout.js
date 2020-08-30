import React from "react"

import Header from "./header"
import Bio from "./bio"

import { Grid, Typography, Divider, Paper } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  content: {
    width: "100%",
  },
  contentWrapper: {
    padding: theme.spacing(2),
  },
  sectionTitle: {},
  sectionTitleDivider: {
    marginBottom: theme.spacing(1),
  },
}))

const theme = createMuiTheme({
  palette: {
    type: "dark",
    // background: {
    //   paper: "#516C8D",
    //   default: "#28385E",
    // },
    primary: {
      main: "#7EC2C2",
    },
    secondary: {
      main: "#E85A70",
    },
    link: "#5FE6FF",
  },
})

const Layout = props => {
  const { title, children, sectionTitle } = props
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <header>
          <Header title={title} />
        </header>
        <main>
          <Grid container spacing={4}>
            <Grid item lg={9} className={classes.content}>
              <Paper
                variant="outlined"
                square
                className={classes.contentWrapper}
              >
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
              </Paper>
            </Grid>
            <Grid item lg={3}>
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
