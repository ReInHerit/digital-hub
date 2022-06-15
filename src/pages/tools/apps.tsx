import { Link } from "gatsby"
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
      <p>Here you'll find applications that are either developed within the ReInHerit project or play an important role for CH management or preservation. At <Link to="/tools/components">tool components</Link> you will find the building blocks necessary for the implementation of these apps.</p>
      <ToolAppsFeed></ToolAppsFeed>
    </BaseLayout>
  )
}

export default Toolkit
