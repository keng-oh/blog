import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Brightness7Icon from "@material-ui/icons/Brightness7";
// import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `3px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(3),
    position: "relative",
  },
  toolbarTitle: {
    lineHeight: "56px",
    color: "inherit",
    textAlign: "center",
    whiteSpace: "noWrap",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto"
  },
  toolbarAvater: {
    position: "absolute",
    right: "0",
  },
  themeModeButton: {
    position: "absolute",
    right: "3rem"
  }
}))

export default function Header(props) {
  const classes = useStyles()
  const { title } = props

  const onToggleClick = e => {
    e.preventDefault();
    alert("実装中ですー");
  }

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
        <Avatar className={classes.toolbarAvater} alt="Keng" src="../../content/assets/profile-icon.png" />
        <Brightness7Icon onClick={onToggleClick} className={classes.themeModeButton}/>
      </Toolbar>
    </header>
  )
}
