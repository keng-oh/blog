import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

const BlogPostTemplate = props => {
  const post = props.data.microcmsArticles
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <>
      <SEO title={post.title} description={post.title || post.excerpt} />
      <Layout location={props.location} title={siteTitle}>
        <article>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Divider />
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
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
