import React from "react"

import Layout from "../layout"

export const NotFound = props => {
  return (
    <Layout
      location={props.data.location}
      title={props.siteTitle}
      sectionTitle="Not Found"
    >
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
