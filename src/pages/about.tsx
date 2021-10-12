import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import CMSPage from "../components/shared/CMSPage"

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="About" />
        <h1>About page</h1>
        <CMSPage url="/sites/about.json"/>
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
