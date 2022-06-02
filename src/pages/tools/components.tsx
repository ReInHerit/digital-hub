import React from "react"
import ToolComponentsFeed from "../../components/shared/ToolComponentsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

/**
 * Main page for toolkit components (should render some kind of overview
 * over available toolkit components)
 * @returns 
 */
const ToolkitComponentsPage = () => {
  return (
    <BaseLayout>
      <MainHeading
        subHeading="Tools available via the ReInHerit toolkit."
      >ReInHerit Toolkit</MainHeading>
      <p className="w-75">All tools on the platform are <b style={{color:"#d7487e"}}>categorized</b> and public available. </p>
      <br></br>
      <ToolComponentsFeed></ToolComponentsFeed>
    </BaseLayout>
  )
}

export default ToolkitComponentsPage
