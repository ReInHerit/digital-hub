import React from "react"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import { Container } from "react-bootstrap"


const overviewHackahton = () => {
    return (
      <BaseLayout
      pageTitle="ReInHerit SMART TOURISM HACKATHON at the CYENS Center of Excellence"
    >
      <MainHeading subHeading="January 2024">
      ReInHerit SMART TOURISM HACKATHON at the CYENS Center of Excellence</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
     <p><b>Third Prize Winner: Augmented Reality, by Kostas Tsagaridis, who won gifts worth 750 euros.</b></p>
    <p>Tour Guide Professionals aims to support professionals like tour guides, hikers, geologists, and botanists by offering services tailored to their needs. These services include access to recording and video studios for podcast creation, assistance building professional webpages, and provision of equipment like headsets and augmented reality glasses through automated dispensers. The company operates as a service provider, partnering with tour guide professionals globally. It respects its exclusive rights to guide tourists through museums, galleries, and archaeological sites. The startup's mission is to enhance productivity and enrich the tourist experience while upholding the integrity of professional roles.</p>
    <p>
    <a style={{borderRadius:0}} href="/pdfs/nicosia/Tsangarides.pdf" download="presentation" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Download the project presentation.</a>
    </p>
        </Container>
      </BaseLayout>
    )
  }
  
export default overviewHackahton