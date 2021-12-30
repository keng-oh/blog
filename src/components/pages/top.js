import React from "react"

import Grid from "@material-ui/core/Grid"

import Layout from "../layout"
import { Articles } from "../organisms"

export const Top = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const articles = props.data.allMicrocmsArticles.nodes
  return (
    <Layout
      location={props.data.location}
      title={siteTitle}
      sectionTitle={"TOP"}
    >
      <Grid container justify="flex-start" alignItems="stretch" spacing={4}>
        {articles.map(article => (
          <Articles key={article.articlesId} article={article} />
        ))}
      </Grid>
    </Layout>
  )
}
