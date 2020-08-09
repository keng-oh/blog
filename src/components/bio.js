import React from "react"

import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"

import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"

const Bio = () => {
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
    <Grid display="flex">
      <Typography variant="h6" gutterBottom>
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
  )
}

export default Bio
