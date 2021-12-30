import React from "react"

import {
  Grid,
  Container,
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
  useMediaQuery,
} from "@material-ui/core"

import { ContentMain, Header, SideMenu, Footer, SEO } from "./organisms"

import { themeReducer, DispatchContext } from "../hooks"

const Layout = props => {
  const { title } = props
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const initialState = {
    darkMode:
      typeof window !== "undefined" &&
      window.localStorage.getItem("darkMode") === null
        ? prefersDarkMode
        : typeof window !== "undefined" &&
          window.localStorage.getItem("darkMode") === "on",
  }
  const [state, dispatch] = React.useReducer(themeReducer, initialState)
  const { darkMode } = state
  const theme = React.useMemo(() => {
    return createMuiTheme({
      palette: {
        type: darkMode ? "dark" : "light",
        primary: {
          light: "#7986cb",
          main: "#3f51b5",
          dark: "#7EC2C2",
          contrastText: "#fff",
        },
        secondary: {
          light: "#ff4081",
          main: "#f50057",
          dark: "#E85A70",
          contrastText: "#fff",
        },
        // text: {
        //   primary: "rgba(255,255,255,0.87)",
        //   secondary: "rgba(255,255,255,0.54)",
        //   disabled: "rgba(255,255,255,0.38)",
        //   hint: "rgba(255,255,255,0.38)"
        // },
        // link: "#1DA1F2",
      },
      overrides: {
        MuiCssBaseline: {
          "@global": {
            a: {
              textDecoration: "none",
              color: "#1DA1F2",
            },
          },
        },
      },
    })
  }, [darkMode])

  return (
    <MuiThemeProvider theme={theme}>
      <SEO title={props.sectionTitle} description={props.sectionTitle} />
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
