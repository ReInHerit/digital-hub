import { Link } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import PerfNav from "../../components/static/firstPerfDocNav"
import MainHeading from "../../components/static/MainHeading"

const PerfAbout = () => {
  return (
    <BaseLayout
        pageTitle="Performance at the Hadjigeorgakis Kornesios Mansion || Documentation"
      >
        <MainHeading subHeading="Documentation of the first ReInHerit performance">
        Performance at the Hadjigeorgakis Kornesios Mansion</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<PerfNav />}>
        <p>In the framework of the ReInHerit immersive performances, an immersive performance was organised at the Hadjigeorgakis Kornesios Mansion in Nicosia in October 2022. This immersive performance combined live music, a sound installation, and a sensory exhibition in the spaces of a unique monument of cultural heritage.</p>
        <p><iframe width="560" height="315" src="https://www.youtube.com/embed/tZ9VoZDAsro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
        </SideBarsLayout>
        </Container>
    </BaseLayout>
  )
}

export default PerfAbout
