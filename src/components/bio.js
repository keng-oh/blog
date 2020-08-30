import React from "react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"

const useStyles = makeStyles(theme => ({
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    // backgroundColor: theme.palette.primary.main,
  },
  gatsbyLink: {
    color: theme.palette.link,
    fontSize: "1.0rem",
    paddingBottom: "0.1rem",
    marginLeft: theme.spacing(2),
  },
  linkItem: {
    margin: 0,
  },
}))

const Bio = () => {
  const classes = useStyles()
  const { allMicrocmsCategories } = useStaticQuery(graphql`
    query {
      allMicrocmsCategories {
        nodes {
          id
          categoriesId
          name
        }
      }
    }
  `)
  const social = [
    {
      mediaName: "GitHub",
      icon: GitHubIcon,
      userName: "keng-oh",
      link: "https://github.com",
    },
    {
      mediaName: "Twitter",
      icon: TwitterIcon,
      userName: "sbkenjiakg_",
      link: "https://twitter.com",
    },
  ]

  return (
    <>
      <Grid display="flex">
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <GatsbyLink className={classes.gatsbyLink} to="/about">
          TODO: 自己紹介
        </GatsbyLink>
      </Grid>
      <Grid display="flex">
        <Typography variant="h6" className={classes.sidebarSection}>
          Social
        </Typography>
        <List component="nav" aria-label="social">
          {social.map(network => (
            <ListItem
              className={classes.linkItem}
              dense={true}
              disableGutters={true}
            >
              <GatsbyLink
                className={classes.gatsbyLink}
                to={network.link + "/" + network.userName}
              >
                <Typography variant="span">
                  <network.icon />
                  {network.userName}
                </Typography>
              </GatsbyLink>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid display="flex">
        <Typography variant="h6" className={classes.sidebarSection}>
          Category
        </Typography>
        <List component="nav" aria-label="category">
          {allMicrocmsCategories.nodes.map(category => (
            <ListItem
              className={classes.linkItem}
              dense={true}
              disableGutters={true}
            >
              <GatsbyLink
                to="/.."
                className={classes.gatsbyLink}
                key={category.categoriesId}
              >
                {category.name}
              </GatsbyLink>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid display="flex">
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Archive
        </Typography>
        <GatsbyLink to="/archive" className={classes.gatsbyLink}>
          記事一覧へ
        </GatsbyLink>
      </Grid>
    </>
  )
}

export default Bio
