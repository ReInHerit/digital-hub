import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BaseLayout from "../components/static/BaseLayout"
import NetlifyCMSAuth from "../components/shared/NetlifyCMSAdmin/NetlifyCMSAuth"

const IndexPage = () => (
  <React.Fragment>
      <NetlifyCMSAuth/>
      <BaseLayout>
        <SEO title="Home" />
          <Hero />
      </BaseLayout>
  </React.Fragment>
)

export default IndexPage
