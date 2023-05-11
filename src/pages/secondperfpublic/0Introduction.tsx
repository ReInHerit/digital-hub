import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const IntroSecondPerf = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Overview</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>Welcome! Through the augmented reality application you have in your hands, we present to you samples from the Bank of Cyprus Cultural Foundation's rich ethnographic collection, which is not accessible to the public. These are presented alongside the Georgios and Nefeli Giabra Pierides Archaeological Collection and the temporary exhibitions of the Cultural Foundation of the Bank of Cyprus.</p>
    <p>The exhibits of this "virtual" exhibition are scattered around the premises of the building and depending on your interaction, they appear on your screens and activate the sound installation located in the space. The virtual exhibition consists of 12 objects of folk art from the Pierides ethnographic collection, mainly from the 19th century, which were used in the daily life of that time, such as examples of silversmithing, woodcarving, ceramics and metalwork.</p>
    <p>During the event "ReInHerit a Museum: Immersive Performance at the Boccf" (19 May 2023), 20 musicians from the Cyprus Symphony Orchestra and the Cyprus Youth Symphony Orchestra accompany the exhibits of the Foundation's collections and exhibitions. You can influence the sounds in the space and interact with the music as you explore the space, then influence the creation of a video projection in the courtyard that will be interpreted as a music score at the end of the show. We hope you enjoy your exploration!</p>
    <p>Links for the applications coming soon.</p>

    <img alt="Second Performance" src="images/secondPerfPromo.jpg" width={"100%"} height={"auto"}></img>
    
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default IntroSecondPerf