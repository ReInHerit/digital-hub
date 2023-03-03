import { Link } from "gatsby"
import React from "react"
import ToolAppsFeed from "../../components/shared/ToolAppsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const Toolkit = () => {
  return (
    <BaseLayout
    pageTitle="Applications documentation | ReInHerit Digital Hub"
    >
      <MainHeading
        subHeading="Applications available via the ReInHerit digital hub."
        subText="Here you will find the documentation for applications developed within the ReInHerit project."
        breadCrumb={[
          {label:"Resources", value:"/resources"},
          {label:"Applications-Documentation", value:"/tools/apps"}
        ]}
      >Applications</MainHeading>
      <p></p>
      <ToolAppsFeed></ToolAppsFeed>
    </BaseLayout>
  )
}

export default Toolkit
