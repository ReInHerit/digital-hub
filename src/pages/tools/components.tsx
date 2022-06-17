import { Link } from "gatsby"
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
        subHeading="Building blocks for the applications provided by ReInHerit"
      >Tool components</MainHeading>
      <p className="w-75">Here you'll find all the building blocks for the applications at the <Link to="/tools/apps">tool apps page</Link>.</p>
      <ToolComponentsFeed></ToolComponentsFeed>
    </BaseLayout>
  )
}

export default ToolkitComponentsPage
