import React from "react"
import { Container } from "react-bootstrap"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"
import MainHeading from "../../components/static/MainHeading"

/**
 * Renders manuals / how-to page component.
 */
const ManualsPage: React.FC = () => {
  return (
    <BaseLayout
      pageTitle="Manuals | ReInHerit Digital Hub"
    >
      <MainHeading
        subHeading="Manual for adding content to the ReInHerit Digital Hub"
      >
        Documentation
      </MainHeading>
      <Container fluid className="bg-white p-md-5 p-sm-3 shadow border-0">
        <SideBarsLayout left={<DocNav />}>
          <h2>Manual for Consortium Members</h2>
          <p>
            Through the buttons below, you can download the Digital Hub manual for consortium members and contributors to the Hub.
          </p>
          <a style={{borderRadius:0}} href="/images/documentation/HubManualShort.pdf" download="Manual" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the Manual as PDF.</a>
        </SideBarsLayout>
      </Container>
    </BaseLayout>
  )
}

export default ManualsPage
