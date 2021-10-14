import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BaseLayout from "../components/static/BaseLayout"

const IndexPage = () => (
  <React.Fragment>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <BaseLayout>
        <SEO title="Home" />
          <Hero />
      </BaseLayout>
  </React.Fragment>
)

export default IndexPage
