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
          <div className="border p-5 text-center">
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
              excerpt="Destination: Spain"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="https://www.artesostenible.org/"
            ></ReinGridCard>
            <ReinGridCard
              key={"2"}
              title="Università degli studi di Firenze - UNIFI - MICC"
              excerpt="Destination: Italy"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="http://www.micc.unifi.it/"
            ></ReinGridCard>
            <ReinGridCard
              key={"3"}
              title="European Cultural Tourism Network - ECTN"
              excerpt="Destination: Belgium           "
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="https://ectn.eu/ "
            ></ReinGridCard>
            
            
            <ReinGridCard
              key={"5"}
              title="University of Nicosia - School of Law"
              excerpt="Destination: Cyprus"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="https://www.unic.ac.cy/school-of-law/ "
            ></ReinGridCard>

            <ReinGridCard
              key={"6"}
              title="Materahub"
              excerpt="Destination: Italy"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="https://www.materahub.com/en/"
            ></ReinGridCard>

            <ReinGridCard
              key={"7"}
              title="Museum of Cycladic Art"
              excerpt="Destination: Greece"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="https://cycladic.gr/en"
            ></ReinGridCard>

          <ReinGridCard
              key={"8"}
              title="University of Graz"
              excerpt="Destination: Austria"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="https://informationsmodellierung.uni-graz.at/en/"
            ></ReinGridCard>

            <ReinGridCard
              key={"9"}
              title="CYENS"
              excerpt="Destination: Cyprus"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="https://www.cyens.org.cy/en-gb/"
            ></ReinGridCard>

            <ReinGridCard
              key={"10"}
              title="Blue Shield"
              excerpt="Destination: Greece"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="https://hellenicblueshield.com/en/home/"
            ></ReinGridCard>

            <ReinGridCard
              key={"11"}
              title="University of Applied Science - Arcada"
              excerpt="Destination: Finland"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
              url="https://www.arcada.fi/en"
            ></ReinGridCard>
            
            <ReinGridCard
              key={"12"}
              title="GrazMuseum"
              excerpt="Destination: Austria"
              faIcon={faAddressCard}
              targetAudience={["visitors"]}
              type="asd"
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
