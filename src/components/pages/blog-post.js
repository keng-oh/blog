import React from "react"
import Moment from "react-moment"

import Layout from "../layout"

import {
  Typography,
  makeStyles,
  Chip,
  Container,
  Paper,
} from "@material-ui/core"

import { LocalOffer as LocalOfferIcon } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  article: {
    padding: theme.spacing(0),
  },
  divider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  postTags: { marginLeft: theme.spacing(1) },
  postTag: { marginLeft: theme.spacing(0.5) },
  articleInfo: { padding: theme.spacing(0), marginBottom: theme.spacing(1) },
  postContainer: { padding: theme.spacing(2) },
  postBody: {
    fontSize: "1rem",
    "& blockquote": {},
    "& a": {
      color: theme.palette.link,
    },
  },
}))

export const BlogPost = props => {
  const post = props.data.microcmsArticles
  const siteTitle = props.data.site.siteMetadata.title

  const classes = useStyles()

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      sectionTitle={post.title}
    >
      <article className={classes.article}>
        <Container className={classes.articleInfo}>
          <Typography
            variant="subtitle1"
            component="span"
            color="textSecondary"
          >
            <Moment format="YYYY/MM/DD" date={post.publishedAt} />
          </Typography>
          <Typography
            variant="inherit"
            color="textSecondary"
            className={classes.postTags}
          >
            {post.category.map((category, index) => (
              <Chip
                key={index}
                icon={<LocalOfferIcon />}
                variant="outlined"
                size="small"
                label={category.name}
                className={classes.postTag}
              />
            ))}
          </Typography>
        </Container>
        <Paper className={classes.postContainer} elevation="3">
          <section
            dangerouslySetInnerHTML={{ __html: post.body }}
            className={classes.postBody}
          />
        </Paper>
      </article>
    </Layout>
  )
}
