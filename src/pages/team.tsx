import { faAddressCard, faAnchor, faSchool } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Col, Row } from "react-bootstrap"
import ReinCardGrid from "../components/shared/ReinCardGrid"
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"

const TeamPage = () => {
  return (
    <BaseLayout>
      <MainHeading>The ReInherit Team</MainHeading>
      <Row>
        <Col>
          <p>
            The Reinherit Team consists of 12 partners - from museums and
            cultural associations and foundations to research and education
            institutions - from 7 EU countries, which all share a deep interest
            in cultural heritage management, research and a sustainable future
            of cultural heritage across the EU.{" "}
          </p>
          <br />

          <h2 className="h4 text-center">Project Lead</h2>
          <div className="border p-5 text-center">
            <p>Bank of Cyprus Cultural Foundation</p>
            <p><img src="https://www.boccf.org/PageFiles/5/boc_logo_EN.jpg" width={200}></img></p>
            <p>Destination: Greece</p>
              <p>Teammembers: Dr. Ioanna Hadjicosti; Dr. Chistodoulos A. Hadjichristodoulou; Dr. Monika Asimenou; Dr. Polina Nikolaou; Dimitrios Bourboulas</p>
              <p>Homepage: https://www.boccf.org/</p>
          </div>

        <br />
          <h2>Team members</h2>
          <ReinCardGrid>
            <ReinGridCard
              key={"1"}
              title="Arte Sostenible"
              excerpt="Destination: Spain 
              Teammembers: 
              Jaime Lopez
              Alfredo Liétor
              "
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="sad"
            ></ReinGridCard>
          </ReinCardGrid>


        </Col>
      </Row>
    </BaseLayout>
  )
}

export default TeamPage
