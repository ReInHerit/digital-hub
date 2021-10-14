import React from "react"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import AboutPanel from "../components/about-panel"
import Testimonials from "../components/testimonials"
import Articles from "../components/articles"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import AppsPanel from "../components/apps-panel"
import BaseLayout from "../components/static/BaseLayout"

const IndexPage = () => (
  <React.Fragment>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <SEO title="Home" />
          <Hero />
          <Services />
          <AboutPanel />
          <AppsPanel />
          {/* <Testimonials /> */}
          <Articles />
      </BaseLayout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
