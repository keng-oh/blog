import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"

const useStyles = makeStyles(theme => ({
  sidebarSection: {
    marginTop: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    // backgroundColor: theme.palette.primary.main,
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
        <Typography variant="h6" gutterBottom color="primary">
          About
        </Typography>
        <Typography>TODO: 自己紹介</Typography>
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
          <Link
            variant="body1"
            href={network.link + "/" + network.userName}
            key={network}
            color="inherit"
          >
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.userName}</Grid>
            </Grid>
          </Link>
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
          <Link
            variant="body1"
            href="/.."
            key={category.categoriesId}
            color="inherit"
          >
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>{category.name}</Grid>
            </Grid>
          </Link>
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
        <Link variant="body1" href="/.." color="inherit">
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>記事一覧へ</Grid>
          </Grid>
        </Link>
      </Grid>
    </>
  )
}

export default Bio
