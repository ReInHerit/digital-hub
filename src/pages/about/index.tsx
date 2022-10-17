
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SEO from "../../components/seo"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const AboutPage = () => (
  <React.Fragment>
    <BaseLayout
      pageTitle="About | ReInHerit Digital Hub"
    >
      <MainHeading 
        breadCrumb={[{label:"About", value:"/about"}]}
      >The ReInHerit Project</MainHeading>
      <Container fluid className="bg-white shadow p-sm-3 p-md-4 rounded">
      <Row>
        <Col md={8}>
          <p>
          ReInHerit is an Horizon 2020 project that aspires to disrupt the current status quo of communication, 
          collaboration and innovation exchange between museums and cultural heritage sites, connecting professionals across 
          these fields, and supporting them in presenting Europe’s tangible and intangible heritage to citizens 
          and tourists, in their wider historical and geographical contexts.{" "}
          </p>
          <p>
          The ReInHerit project is proposing an innovative model of sustainable heritage management, 
          through which a dynamic network will be born; this network comprised of cultural heritage professionals, 
          innovation and cultural heritage solution tech experts, researchers, national museums, regional and local 
          museums, and representative managers of Heritage Label sites.</p>
          <p>The Digital Hub fosters this network, hosting a series of resources (training resources and applications on conservation, digital engagement 
            and youth participation, tourism) and aiming to become an ecosystem in which all stakeholders will be able to experiment with the resources 
            and share their experiences.</p>
          <p>
            The project website describes in details the Work Packages and publishes the reports. Visit it at{" "}
            <a target="_blank" href="https://www.reinherit.eu/">
              reinherit.eu
            </a>{" "}
            .{" "}
          </p>
        </Col>
      </Row>
      </Container>
    </BaseLayout>
  </React.Fragment>
)

export default AboutPage