import React from "react"

import { initialTheme } from "../utils/theme"
import { DispatchContext } from "../hooks/dispatchContext"
import { themeReducer, initialState } from "../hooks/themeReducer"

import Header from "./header"
import ContentMain from "./contentMain"
import SideMenu from "./sideMenu"
import Footer from "./footer"

import { Grid, Container, CssBaseline } from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const Layout = props => {
  const { title } = props

  const [state, dispatch] = React.useReducer(themeReducer, initialState);
  const { darkMode } = state;
  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...initialTheme,
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: initialTheme.palette.primary,
        secondary: initialTheme.palette.secondary,
      }
    });
  }, [darkMode]);


  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <DispatchContext.Provider value={dispatch}>
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
      </DispatchContext.Provider>
    </MuiThemeProvider>
  )
}

export default Layout
