import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
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