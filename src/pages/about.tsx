import React from "react"
import SEO from "../components/seo"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import CMSPage from "../components/shared/CMSPage"
import BaseLayout from "../components/static/BaseLayout"

const AboutPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <BaseLayout>
      <SEO title="About" />
        <h1>About page</h1>
        <CMSPage url="/sites/about.json"/>
      </BaseLayout>
    </ThemeProvider>
  </React.Fragment>
)

export default AboutPage;
