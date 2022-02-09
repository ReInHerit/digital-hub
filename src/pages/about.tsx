import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import CMSPage from "../components/shared/CMSPage"
import NetlifyEmbed from "../components/shared/NetlifyEmbed"
import BaseLayout from "../components/static/BaseLayout"

const AboutPage = () => (
  <React.Fragment>
      <BaseLayout>
      <SEO title="About" />
        <h1>About page</h1>
        <Link to="/dataprot">Image Editor test page</Link>
        <p>Content is rendered out of netlify CMS. </p>
        <p>Pages is hidden under the CMS and only listed here in the embed.</p>

      </BaseLayout>
  </React.Fragment>
)

export default AboutPage;
