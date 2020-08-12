import React from "react"
import { graphql } from "gatsby"
import Moment from "react-moment"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"

const useStyles = makeStyles(theme => ({
  article: {
    padding: theme.spacing(3),
  },
  divider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  postTags: { marginLeft: theme.spacing(1) },
  postTag: { marginLeft: theme.spacing(0.5) },
}))

const BlogPostTemplate = props => {
  const post = props.data.microcmsArticles
  const siteTitle = props.data.site.siteMetadata.title

  const classes = useStyles()

  return (
    <>
      <SEO title={post.title} description={post.title || post.excerpt} />
      <Layout location={props.location} title={siteTitle}>
        <article className={classes.article}>
          <Typography variant="h4" gutterBottom>
            {post.title}
          </Typography>
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
            {post.category.map(category => (
              <Chip
                icon={<LocalOfferIcon />}
                variant="outlined"
                size="small"
                color="primary"
                label={category.name}
                className={classes.postTag}
              />
            ))}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {post.description}
          </Typography>
          <Divider className={classes.divider} />
          <section dangerouslySetInnerHTML={{ __html: post.body }} />
        </article>
      </Layout>
    </>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: String!) {
    microcmsArticles(id: { eq: $id }) {
      title
      body
      publishedAt
      description
      articlesId
      category {
        name
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
