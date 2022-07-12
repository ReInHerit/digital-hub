import React from "react"
import { Container } from "react-bootstrap"
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
      <MainHeading
        subText="Here you'll find explainatory material, helpful texts and graphics for the digital-hub itself."
        subHeading="Materials / manuals about the ReInHerit digital-hub itself"
      >
        Documentation
      </MainHeading>
      <Container fluid className="bg-white p-md-5 p-sm-3 shadow border-0">
        <SideBarsLayout left={<DocNav />}>
          <h2>Manuals and how-tos</h2>
          <p>
            Here you'll find small explainatory texts on how to use the diverse
            features of this digital-hub.
          </p>
          <ManualsFeed></ManualsFeed>
        </SideBarsLayout>
      </Container>
    </BaseLayout>
  )
}

export default ManualsPage
