import { faAddressCard, faAnchor, faSchool } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import ReinCardGrid from "../../components/shared/ReinCardGrid"
import ReinGridCard from "../../components/shared/ReinCardGrid/ReinGridCard"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const TeamPage = () => {
  return (
    <BaseLayout
      pageTitle="Consortium | ReInHerit Digital Hub"
    >
      <MainHeading breadCrumb={[{label:"About", value:"/about"}, {label:"Consortium", value:"/about/team"}]} subText="The Reinherit Consortium consists of 12 partners from museums, 
      cultural associations and research institutions - from 7 EU countries.">The ReInHerit Consortium</MainHeading>
      <Row>
        <Col>
          <p>
            {" "}
          </p>
          <br />

          <h2 className="h4">Project Coordinator</h2>
          <div className="border p-5 text-center bg-white border-0 rounded shadow">
            <p><b>Bank of Cyprus Cultural Foundation - Cyprus</b></p>
            <p><a href="https://www.boccf.org/">Homepage</a></p>
            <p><u>Team members</u>: Ioanna Hadjicosti, Christodoulos A. Hadjichristodoulou, 
            Monika Asimenou, Polina Nikolaou, Dimitrios Bourboulas.</p>
          </div>

        <br /> 
          <h2>Consortium members</h2>
          <ReinCardGrid>
            <ReinGridCard
              key={"1"}
              title="Arte Sostenible"
              url="https://www.artesostenible.org/"
              >
            <p><u>Team members</u>: Jaime Lopez, Alfredo Liétor.</p>          
            </ReinGridCard>
            <ReinGridCard
              key={"2"}
              title="Università degli studi di Firenze - UNIFI - MICC"
              url="http://www.micc.unifi.it/"
              >          
              <p><u>Team members</u>: Marco Bertini, Alberto Del Bimbo, Paolo Mazzanti, Lorenzo Seidenari, Andrew D. Bagdanov.</p>
            </ReinGridCard>
            <ReinGridCard
              key={"3"}
              title="European Cultural Tourism Network - ECTN"
              url="https://www.culturaltourism-network.eu/"
              >          
              <p><u>Team members</u>: Nasos Hadjigeorgiou, Emmanouil (Manos) Vougioukas, Raitis Sijats, Simina Manea.</p>
            </ReinGridCard>
            <ReinGridCard
              key={"5"}
              title="University of Nicosia - School of Law"
              url="https://www.unic.ac.cy/school-of-law/"
              >          
              <p><u>Team members</u>: Achilles C. Emilianides, Irini Stamatoudi, Dimitrios A. Kourtis, Konstantinos Roussos.</p>
            </ReinGridCard>
            <ReinGridCard
              key={"6"}
              title="Materahub"
              url="https://www.materahub.com/en/"
              >          
              <p><u>Team members</u>: Paolo Montemurro.</p>
            </ReinGridCard>
            <ReinGridCard
              key={"7"}
              title="Museum of Cycladic Art"
              url="https://cycladic.gr/en"
              >          
              <p><u>Team members</u>: Marina Plati, Eleni Markou, Maria Malichoutsaki, Stella Tsagkaraki, 
              Nefeli Bantela, Stamatis Manikis, Ioannis Fappas.</p>
            </ReinGridCard>
          <ReinGridCard
              key={"8"}
              title="University of Graz"
              url="https://www.uni-graz.at/"
              >          
              <p><u>Team members</u>: Chiara Zuanni, Wolfgang Fischer, Jörn Harfst, Sebastian Stoff, Jasmin Sandriester, Sina Krottmaier.</p>
            </ReinGridCard>
            <ReinGridCard
              key={"9"}
              title="CYENS"
              url="https://www.cyens.org.cy/en-gb/"
              >          
              <p><u>Team members</u>: Panayiotis Charalambous, Kleanthis Neokleous, Myrto Aristidou, Stefanos Papadas, 
              Andreas Papapetrou, Theopisti Stylianou-Lambert, Maria Shehade.</p>
            </ReinGridCard>
            <ReinGridCard
              key={"10"}
              title="Blue Shield"
              url="https://hellenicblueshield.com/en/home/"
              >          
              <p><u>Team members</u>: Elena Korka, Antonia Zervaki, Sofia Stavrianopoulou.</p>
            </ReinGridCard>
            <ReinGridCard
              key={"11"}
              title="University of Applied Science - Arcada"
              url="https://www.arcada.fi/en"
              >          
              <p><u>Team members</u>: Susanne Ådahl, Maria Bäck, Tomas Träskman.</p>
            </ReinGridCard>
            <ReinGridCard
              key={"12"}
              title="GrazMuseum"
              url="https://www.grazmuseum.at/"
              >          
              <p><u>Team members</u>: Sibylle Dienesch, Antonia Nussmüller, Catalin Betz, Helene Gödl.</p>
            </ReinGridCard>
            <ReinGridCard
              key={"13"}
            >
          <p><b>More information on the Reinherit Consortium and its team members can be found at <a href="https://www.reinherit.eu/the-team" target="_blank">https://www.reinherit.eu/the-team</a></b></p>
            </ReinGridCard>
          </ReinCardGrid>

          <br></br>
          <img alt="Reinherit Consortium Logos" src="images/allLogos.png" height={"auto"} width={"100%"} max-width={"100%"}></img>
        </Col>
      </Row>
      </BaseLayout>
  )
}

export default TeamPage
