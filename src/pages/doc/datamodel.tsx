import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"
import MainHeading from "../../components/static/MainHeading"

const DataModel = () => {
  return (
    <BaseLayout
      pageTitle="Datamodel | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="Materials / manuals about the ReInHerit digital-hub itself">
        Documentation
      </MainHeading>
      <p>
        Here you'll find explainatory material, helpful texts and graphics for
        the digital-hub itself.
      </p>
      <SideBarsLayout left={<DocNav />}>
        <h2>Data model of ReinHerit</h2>
        <h2>ER Diagram?</h2>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default DataModel
