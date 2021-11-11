import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BaseLayout from "../components/static/BaseLayout"
import NetlifyCMSAuth from "../components/shared/NetlifyCMSAdminCDN/NetlifyCMSAuth"
import Landing from "../components/static/Landing"

const IndexPage = () => (
  <React.Fragment>
      {/*<NetlifyCMSAuth/>*/}
      <BaseLayout>
        <SEO title="Home" />
          <Hero />
          <br />
          <Landing></Landing>
      </BaseLayout>
  </React.Fragment>
)

export default IndexPage
