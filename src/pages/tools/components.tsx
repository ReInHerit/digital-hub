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
    <BaseLayout
    pageTitle="Toolkit: components | ReInHerit Digital Hub"
    >
      <MainHeading
        subHeading="Glossary and technical explanation of the components used in the ReInHerit applications."
        subText="Here you can discover more information about the building blocks for the ReInHerit applications."
        breadCrumb={[
          {label:"Resources", value:"/resources"},
          {label:"Toolkitcomponents", value:"/tools/components"}
        ]}
      >Technological components</MainHeading>
      <p className="w-75"></p>
      <ToolComponentsFeed></ToolComponentsFeed>
    </BaseLayout>
  )
}

export default ToolkitComponentsPage
