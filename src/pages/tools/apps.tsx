import React from "react"
import ToolAppsFeed from "../../components/shared/ToolAppsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const Toolkit = () => {
  return (
    <BaseLayout>
      <MainHeading
        subHeading="Applications available via the ReInHerit digital hub."
      >Tool apps</MainHeading>
      <p>Here you'll find applications that are either developed within the ReInHerit project or play an important role for CH management or preservation.</p>
      <ToolAppsFeed></ToolAppsFeed>
    </BaseLayout>
  )
}

export default Toolkit
