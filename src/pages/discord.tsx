import React from "react"
import SEO from "../components/seo"
import BaseLayout from "../components/static/BaseLayout"


const IndexPage = () => (
  <React.Fragment>
      <BaseLayout>
      <SEO title="Project Management" />
        <h1>Discord Lounge</h1>
        <p>Ongoing Meetings</p>
        <iframe src="https://discord.com/widget?id=869917057381191702&amp;theme=dark" width="850" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </BaseLayout>
  </React.Fragment>
)

export default IndexPage
