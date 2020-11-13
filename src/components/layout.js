import React from "react"

import Header from "./header"
import ContentMain from "./contentMain"
import Footer from "./footer"
import Bio from "./bio"
import SideMenu from "./sideMenu"

import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import { makeStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

const useStyles = makeStyles(theme => ({
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
    background: {
      paper: "#25282c",
      default: "#000000 ",
    },
    primary: {
      main: "#7EC2C2",
    },
    secondary: {
      main: "#E85A70",
    },
    link: "#1DA1F2",
  },
})

const Layout = props => {
  const { title } = props

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={title} />
        <main>
          <Grid container spacing={4}>
            <ContentMain {...props} />
            <SideMenu />
          </Grid>
        </main>
        <Footer title={title} />
      </Container>
    </MuiThemeProvider>
  )
}

export default Layout
