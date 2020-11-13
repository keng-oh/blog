import React from "react"

import { theme } from "../utils/theme"

import Header from "./header"
import ContentMain from "./contentMain"
import SideMenu from "./sideMenu"
import Footer from "./footer"

import { Grid, Container, CssBaseline } from "@material-ui/core"
import { MuiThemeProvider } from "@material-ui/core/styles"

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
