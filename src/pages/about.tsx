import React from "react"
import SEO from "../components/seo"
import CMSPage from "../components/shared/CMSPage"
import BaseLayout from "../components/static/BaseLayout"

const AboutPage = () => (
  <React.Fragment>
      <BaseLayout>
      <SEO title="About" />
        <h1>About page</h1>
        <CMSPage url="/sites/about.json"/>
      </BaseLayout>
  </React.Fragment>
)

export default AboutPage;
