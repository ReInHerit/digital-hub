
import React from "react"
import { Col, Row } from "react-bootstrap"
import SEO from "../../components/seo"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const AboutPage = () => (
  <React.Fragment>
    <BaseLayout>
      <SEO title="About" />
      <MainHeading>About ReInHerit</MainHeading>
      <Row>
        <Col md={8}>
          <h2 className="h4">Aims and challenges</h2>
          <p>
            The Horizon 2020 project "ReInHerit" focuses on current challenges in
            the heritage sector across Europe (e.g. climate protection and
            sustainability, digital transformation and digital engagement,
            integrated experiences across sites and museums) and aims to foster
            further communication and exchange opportunities between actors of the
            cultural heritage sector (especially museums, cultural heritage managers
            and policy experts, tourism industries, heritage audiences, and
            citizens) by developing solutions, guidelines and tools, which are
            accessible for everyone.{" "}
          </p>
          <hr></hr>
          <h2 className="h4">Solutions and possibilities </h2>
          <p>
            To achieve this goal a sustainable digital ecosystem for cultural
            heritage - or in other words this Digital Hub - was created. In this
            hub, all actors of the cultural heritage sector will have a chance to
            make the future of cultural heritage their own - either by connecting,
            communicating and sharing with other peers or by getting to know new
            ways and technologies for cultural heritage management and distribution.
          </p>
          <p>
            Want to know more about the project? Visit the projects website at{" "}
            <a target="_blank" href="https://www.reinherit.eu/">
              reinherit.eu
            </a>{" "}
            for further information.{" "}
          </p>
        </Col>
      </Row>
    </BaseLayout>
  </React.Fragment>
)

export default AboutPage
