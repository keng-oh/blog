import { createMuiTheme } from "@material-ui/core/styles"

export const initialTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#7EC2C2",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#E85A70",
      contrastText: "#fff"
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
      '@global': {
        'a': {
          textDecoration: 'none',
          color: "#1DA1F2",
        }
      },
    },
  },
})