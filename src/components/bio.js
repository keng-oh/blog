import React from "react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

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
    textDecoration: "underline",
    paddingBottom: "0.1rem",
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
          <Grid>TODO: 自己紹介</Grid>
        </GatsbyLink>
      </Grid>
      <Grid display="flex">
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Social
        </Typography>
        {social.map(network => (
          <GatsbyLink
            className={classes.gatsbyLink}
            to={network.link + "/" + network.userName}
          >
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.userName}</Grid>
            </Grid>
          </GatsbyLink>
        ))}
      </Grid>
      <Grid display="flex">
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Category
        </Typography>
        {allMicrocmsCategories.nodes.map(category => (
          <GatsbyLink
            to="/.."
            className={classes.gatsbyLink}
            key={category.categoriesId}
          >
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>{category.name}</Grid>
            </Grid>
          </GatsbyLink>
        ))}
      </Grid>
      <Grid display="flex">
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Aechive
        </Typography>
        <GatsbyLink to="/.." className={classes.gatsbyLink}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>記事一覧へ</Grid>
          </Grid>
        </GatsbyLink>
      </Grid>
    </>
  )
}

export default Bio
