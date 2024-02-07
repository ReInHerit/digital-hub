import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavDoc from "../../components/static/secondPerfDocNav"
import { Container } from "react-bootstrap"


const spMusic = () => {
    return (
      <BaseLayout
      pageTitle="Performance at the Bank of Cyprus Cultural Foundation || Documentation"
    >
      <MainHeading subHeading="ReInHerit a Museum - Documentation">
      Music scores</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
      <SideBarsLayout left={<SecondPerfNavDoc />}>
    <p>
    The scores are split into three separate instrumental groups (strings, woodwinds, brass) and a percussion soloist. The video score is for the finale where all performers play together. Each part has its own instructions on locations and timings. The musicians combine their sounds with the audio coming from the interactive sound installation set up in the museum/performance space.
    </p>
    <p></p>
    <a style={{borderRadius:0}} href="/pdfs/Video score - Tutti.pdf" download="VideoScore" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the score and notes for: Video Score - tutti</a>
    <p></p>
    <a style={{borderRadius:0}} href="/pdfs/Staircase Music - Percussion.pdf" download="StaircaseMusic" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the score and notes for: Staircase Music - Percussion</a>
    <p></p>
    <a style={{borderRadius:0}} href="/pdfs/If then else - Woodwinds.pdf" download="Ifthenelse" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the score and notes for: If then else - Woodwind</a>
    <p></p><a style={{borderRadius:0}} href="/pdfs/Reiterate - Brass.pdf" download="Reiterate" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the score and notes for: Reiterate - Brass.</a>
    <p></p><a style={{borderRadius:0}} href="/pdfs/Ten faces - Strings.pdf" download="Tenfaces" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the score and notes for: Ten faces - Strings.</a>
    <p></p>

        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default spMusic