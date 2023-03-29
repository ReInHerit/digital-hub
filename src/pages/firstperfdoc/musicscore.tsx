import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import PerfNav from "../../components/static/firstPerfDocNav"
import { Container } from "react-bootstrap"


const TreasureHunt = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Hadjigeorgakis Kornesios Mansion || Documentation"
      >
        <MainHeading subHeading="Documentation of the first ReInHerit performance">
        Music Score by Dr Andreas Papapetrou</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<PerfNav />}>
    <p>
    The music score of the first performance was written by Dr Andreas Papapetrou. In the following PDF, a detailed description and the score are presented. 
    </p>
    <p>
    <a style={{borderRadius:0}} href="/pdfs/AndreasPapapetrouScore.pdf" download="MusicScore" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the music score and notes.</a>

    </p>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default TreasureHunt