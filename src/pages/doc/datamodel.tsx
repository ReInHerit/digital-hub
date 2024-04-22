import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"
import MainHeading from "../../components/static/MainHeading"
import { Container } from "react-bootstrap"

const DataModel = () => {
  return (
    <BaseLayout
      pageTitle="Information Architecture | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="Organisation of the ReInHerit Digital Hub content">
        Information Architecture
      </MainHeading>
      <Container fluid className="bg-white p-md-5 p-sm-3 shadow border-0">
        <SideBarsLayout left={<DocNav />}>
      <p>
      The Digital Hub is organised in three main sections: resources (for cultural heritage professionals), participate and network, "discover" (for all audiences).
      The resources section offers training material and documentation of the ReInHerit technological outputs, so to enable further reuse and development of 
      the technologies and approaches developed within this project.  
      </p>
      <p>
      The "participate and networking" section includes call for participation in events (e.g. Hackathon) and contribution (e.g. to the online collection),
      as well as a forum for free discussion around topics of relevance for the cultural heritage and cultural tourism sectors.
      </p>
      <p>
      Finally, in the "Discovery" section, it is possible to enjoy the products of ReInHerit, such as the digital exhibitions, the videogame,
      the applications, and the e-Shop.
      </p>
      <p>
      The following image summarises the content of the Hub and its information architecture.
      </p>
      <div>
      <center><img src="images/documentation/InfoArchitecture.png" height={"auto"} width={"80%"}></img></center>
      </div>
      </SideBarsLayout>
      </Container>
    </BaseLayout>
  )
}

export default DataModel
