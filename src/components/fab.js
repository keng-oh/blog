import React, { useState } from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

import { makeStyles } from "@material-ui/core/styles"
import SpeedDial from "@material-ui/lab/SpeedDial"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import SpeedDialAction from "@material-ui/lab/SpeedDialAction"

const useStyles = makeStyles(theme => ({
  speedDial: {
    position: "fixed",
    margin: 0,
    top: "auto",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    left: "auto",
  },
}))

const actions = [
  {
    icon: <FacebookIcon round />,
    name: "share facebook",
    button: <FacebookShareButton url="google.com" />,
  },
  {
    icon: <LineIcon round />,
    name: "share line",
    button: <LineShareButton />,
  },
  {
    icon: <TwitterIcon round />,
    name: "share twitter",
    button: <TwitterShareButton />,
  },
]

const Fab = props => {
  const classes = useStyles()
  const [direction] = useState("up")
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const share = () => {}

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction={direction}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  )
}

export default Fab
