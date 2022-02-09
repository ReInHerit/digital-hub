import React from "react"
import ToolkitFeed from "../components/shared/ToolkitFeed"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"

const Toolkit = () => {
  return (
    <BaseLayout>
      <MainHeading
        subHeading="Tools available via the ReInHerit toolkit."
      >ReInHerit Toolkit</MainHeading>
      <br />
      <ToolkitFeed></ToolkitFeed>
    </BaseLayout>
  )
}

export default Toolkit
