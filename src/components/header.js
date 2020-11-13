import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(3),
  },
  toolbarTitle: {
    flex: 1,
    color: "inherit",
    textAlign: "center",
    whiteSpace: "noWrap",
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const { title } = props

  return (
    <header>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
    </header>
  )
}
