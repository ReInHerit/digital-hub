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
      <p className="w-75">All tools on the platform are <b style={{color:"#d7487e"}}>categorized</b> and public available. </p>
      <br></br>
      <ToolkitFeed></ToolkitFeed>
    </BaseLayout>
  )
}

export default Toolkit
