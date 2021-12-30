import React from "react"

import { Grid } from "@material-ui/core"

import Layout from "../layout"
import { Articles } from "../organisms"

export const Category = props => {
  const articles = props.data.allMicrocmsArticles.nodes
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <>
      <Layout
        location={props.location}
        title={siteTitle}
        sectionTitle={"Category"}
      >
        <Grid container justify="flex-start" alignItems="stretch" spacing={4}>
          {articles.map(article => (
            <Articles key={article.articlesId} article={article} />
          ))}
        </Grid>
      </Layout>
    </>
  )
}
