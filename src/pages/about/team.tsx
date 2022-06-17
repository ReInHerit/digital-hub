import { faAddressCard, faAnchor, faSchool } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Col, Row } from "react-bootstrap"
import ReinCardGrid from "../../components/shared/ReinCardGrid"
import ReinGridCard from "../../components/shared/ReinCardGrid/ReinGridCard"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

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
          <div className="border p-5 text-center border-dark">
            <p>Bank of Cyprus Cultural Foundation</p>
            <p><img src="https://www.boccf.org/PageFiles/5/boc_logo_EN.jpg" width={200}></img></p>
            <p>Destination: Greece</p>
              <p>Homepage: https://www.boccf.org/</p>
          </div>

        <br />
          <h2>Team members</h2>
          <ReinCardGrid>
            <ReinGridCard
              key={"1"}
              title="Arte Sostenible"
              body="Destination: Spain"
              url="https://www.artesostenible.org/"
            ></ReinGridCard>
            <ReinGridCard
              key={"2"}
              title="Università degli studi di Firenze - UNIFI - MICC"
              url="http://www.micc.unifi.it/"
              body="Destination: Italy"
            ></ReinGridCard>
            <ReinGridCard
              key={"3"}
              title="European Cultural Tourism Network - ECTN"
              body="Destination: Belgium           "
              url="https://ectn.eu/ "
            ></ReinGridCard>
            
            
            <ReinGridCard
              key={"5"}
              title="University of Nicosia - School of Law"
              body="Destination: Cyprus"
              
              url="https://www.unic.ac.cy/school-of-law/ "
            ></ReinGridCard>

            <ReinGridCard
              key={"6"}
              title="Materahub"
              body="Destination: Italy"
              url="https://www.materahub.com/en/"
            ></ReinGridCard>

            <ReinGridCard
              key={"7"}
              title="Museum of Cycladic Art"
              body="Destination: Greece"
              url="https://cycladic.gr/en"
            ></ReinGridCard>

          <ReinGridCard
              key={"8"}
              title="University of Graz"
              body="Destination: Austria"
              url="https://informationsmodellierung.uni-graz.at/en/"
            ></ReinGridCard>

            <ReinGridCard
              key={"9"}
              title="CYENS"
              body="Destination: Cyprus"
              url="https://www.cyens.org.cy/en-gb/"
            ></ReinGridCard>

            <ReinGridCard
              key={"10"}
              title="Blue Shield"
              body="Destination: Greece"
              url="https://hellenicblueshield.com/en/home/"
            ></ReinGridCard>

            <ReinGridCard
              key={"11"}
              title="University of Applied Science - Arcada"
              body="Destination: Finland"
              url="https://www.arcada.fi/en"
            ></ReinGridCard>
            
            <ReinGridCard
              key={"12"}
              title="GrazMuseum"
              body="Destination: Austria"
              url="https://www.grazmuseum.at/"
            ></ReinGridCard>


          </ReinCardGrid>

          <br></br>
          <p>More information on the Reinherit team can be found at <a href="https://www.reinherit.eu/the-team" target="_blank">https://www.reinherit.eu/the-team</a></p>

        </Col>
      </Row>
    </BaseLayout>
  )
}

export default TeamPage
