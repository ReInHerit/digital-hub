import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import ManualsFeed from "../../components/shared/ManualsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"
import MainHeading from "../../components/static/MainHeading"

/**
 * Renders manuals / how-to page component.
 */
const ManualsPage: React.FC = () => {
  return (
    <BaseLayout>
      <MainHeading subHeading="Materials / manuals about the ReInHerit digital-hub itself">Documentation</MainHeading>
      <p>Here you'll find explainatory material, helpful texts and graphics for the digital-hub itself.</p>
      <SideBarsLayout left={<DocNav />}>
        <h2>Manuals and how-tos</h2>
        <p>
          Here you'll find small explainatory texts on how to use the diverese
          features of this digital-hub.
        </p>
        <ManualsFeed></ManualsFeed>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default ManualsPage
