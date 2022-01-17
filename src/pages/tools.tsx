import React from "react"
import ToolkitFeed from "../components/shared/ToolkitFeed"
import BaseLayout from "../components/static/BaseLayout"

const Toolkit = () => {
  return (
    <BaseLayout>
      <h1>ReInHerit Toolkit</h1>
      <p>Tools available via the ReInHerit toolkit.</p>
      <br />
      <ToolkitFeed></ToolkitFeed>
    </BaseLayout>
  )
}

export default Toolkit
