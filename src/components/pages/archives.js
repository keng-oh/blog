import React from "react"

import { Grid } from "@material-ui/core"

import Layout from "../layout"
import { Articles } from "../organisms"

export const Archives = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const articles = data.allMicrocmsArticles.nodes

  return (
    <Layout location={props.location} title={siteTitle} sectionTitle="Archives">
      <Grid container justify="flex-start" alignItems="stretch" spacing={4}>
        {articles.map(article => (
          <Articles key={article.articlesId} article={article} />
        ))}
      </Grid>
    </Layout>
  )
}
