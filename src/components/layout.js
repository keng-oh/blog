import React from "react"
import { ContentMain, Header, Footer, Seo } from "./frame"

export const Layout = props => {
  const { title, sectionTitle} = props

  return (
    <>
      <Seo title={sectionTitle} description={sectionTitle} />
      <Header title={title} />
      <ContentMain {...props} />
      <Footer title={title} />
    </>
  )
}
