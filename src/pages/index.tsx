import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BaseLayout from "../components/static/BaseLayout"
import NetlifyCMSAuth from "../components/shared/NetlifyCMSAdminCDN/NetlifyCMSAuth"
import Landing from "../components/static/Landing"

const IndexPage = () => (
  <React.Fragment>
      <BaseLayout>
        <SEO title="Home" />
          <Hero />
          {/* <Landing></Landing> */}
          {/* Necessary for users to allow seting a pw after getting the invite mail  */}
          <NetlifyCMSAuth></NetlifyCMSAuth>
      </BaseLayout>
  </React.Fragment>
)

export default IndexPage
