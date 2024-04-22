import { Link } from "gatsby"
import React from "react"
import ToolAppsFeed from "../../components/shared/ToolAppsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import {SSRProvider} from '@react-aria/ssr'

const Toolkit = () => {
  return (
    <SSRProvider>
    <BaseLayout
    pageTitle="Applications documentation | ReInHerit Digital Hub"
    >
      <MainHeading
        subHeading="Applications developed within the ReInHerit project."
        subText="Documentation for technological applications developed as part of the ReInHerit Toolkit."
        breadCrumb={[
          {label:"Resources", value:"/resources"},
          {label:"Applications Documentation", value:"/tools/apps"}
        ]}
      >Applications</MainHeading>
      <p></p><a style={{borderRadius:3}} href="/pdfs/ReInHerit_Toolkit.pdf" download="toolkitSummary" className="btn btn-info border-radius-2" target="_blank" rel="noreferrer">Click this button to download an overview of the Toolkit and all the material available about it (documentation, webinars, further info).</a>
      <p></p>
      <ToolAppsFeed></ToolAppsFeed>
    </BaseLayout>
    </SSRProvider>
  )
}

export default Toolkit
