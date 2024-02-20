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
      <p><b>First Prize Winner: Nicosia Light Festival, by Jannis Sidiropoulos, which received gifts worth 3,000 euros.</b></p>
<p>The inspiration behind this idea was that having worked with light for over 20 years, Jannis wanted to share the joy it brings to people. He is inspired by many light and visual artists worldwide and the possibilities the open canvas of out-of-the-ordinary canvas of cultural sites gives. Janni’s business idea for a light art festival promoting local and international talent while educating about the local culture and entertaining at the same time. To build his concept, he used the Business Model Canvas methodology. The next step for this idea is to approach the authorities and partner with various organizations to start the production process.</p>
<p>
<a style={{borderRadius:0}} href="/pdfs/nicosia/NLF.pdf" download="presentation" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Download the project presentation.</a>
</p>
        </Container>
      </BaseLayout>
    )
  }
  
export default overviewHackahton