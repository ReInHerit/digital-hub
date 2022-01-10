import { faDeaf, faTools } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import ReinCardGrid from "../components/shared/ReinCardGrid"
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard"
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
