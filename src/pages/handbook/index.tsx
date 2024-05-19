import React from "react"
import { Container } from "react-bootstrap"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const Handbook = () => {
  return (
    <BaseLayout
    pageTitle="Handbook On Communication and Collaboration in Museums and Heritage Sites | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="An Handbook presenting the experiences of the H2020 ReInHerit project"
        breadCrumb={[
          {label:"Resources", value:"/resources"},
          {label:"Handbook", value:"/handbook"}
        ]}        
      >Handbook On Communication and Collaboration in Museums and Heritage Sites</MainHeading>

      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
     
<p>The ReInHerit’s Handbook thematic priorities are founded on effective communication and
collaboration within the diverse European cultural heritage sector, built upon three central
pillars, on which the objectives of the Handbook are anchored: digitization, sustainability, and
continuing professional development.
</p>
<a style={{borderRadius:0}} href="/pdfs/reinherit_handbook_final.pdf" download="Handbook" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the ReInHerit Handbook</a>
<p></p>
    
        </Container>
    </BaseLayout>
  )
}

export default Handbook
