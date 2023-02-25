import { Link } from "gatsby"
import React from "react"
import ToolAppsFeed from "../../components/shared/ToolAppsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const Toolkit = () => {
  return (
    <BaseLayout
    pageTitle="Tool-apps | ReInHerit Digital Hub"
    >
      <MainHeading
        subHeading="Applications available via the ReInHerit digital hub."
        subText="Here you'll find applications that are either developed within the ReInHerit project or play an important role for CH management or preservation. At tool components you will find the building blocks necessary for the implementation of these apps."
        breadCrumb={[
          {label:"Resources", value:"/resources"},
          {label:"Tool-apps", value:"/tools/apps"}
        ]}
      >Applications</MainHeading>
      <p></p>
      <ToolAppsFeed></ToolAppsFeed>
    </BaseLayout>
  )
}

export default Toolkit
