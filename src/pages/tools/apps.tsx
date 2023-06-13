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
        subHeading="Applications developed within the ReInHerit project."
        subText="Here you will find the documentation for applications developed as part of the ReInHerit Toolkit."
        breadCrumb={[
          {label:"Resources", value:"/resources"},
          {label:"Applications Documentation", value:"/tools/apps"}
        ]}
      >Applications</MainHeading>
      <p></p>
      <ToolAppsFeed></ToolAppsFeed>
    </BaseLayout>
  )
}

export default Toolkit
