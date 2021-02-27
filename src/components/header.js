import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import useTheme from '@material-ui/core/styles/useTheme';
import IconButton from "@material-ui/core/IconButton";
import Brightness7Icon from "@material-ui/icons/Brightness7"
import Brightness4Icon from "@material-ui/icons/Brightness4"

import { useToggleDarkMode } from '../hooks/dispatchContext'

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
    '& > img': {
      marginBottom: '0',
    }
  },
  themeModeButton: {
    position: "absolute",
    right: "3rem"
  }
}))

export default function Header(props) {
  const classes = useStyles()
  const { title } = props
  const paletteType = useTheme().palette.type;
  const _toggleDarkMode = useToggleDarkMode()

  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "keng_icon1.jpeg" }) {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

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
        <Avatar className={classes.toolbarAvater} alt="Keng" src={image.childImageSharp.fluid.src} />
        <IconButton className={classes.themeModeButton} onClick={_toggleDarkMode} >
          {paletteType === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </header>
  )
}
