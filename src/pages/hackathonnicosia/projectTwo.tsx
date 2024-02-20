import React from "react"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import { Container } from "react-bootstrap"


const overviewHackahton = () => {
    return (
      <BaseLayout
      pageTitle="ReInHerit SMART TOURISM HACKATHON at the CYENS Center of Excellence"
    >
      <MainHeading subHeading="January 2024">
      ReInHerit SMART TOURISM HACKATHON at the CYENS Center of Excellence</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
      <p><b>Second Prize Winner: The ultimate Hub for Cyprus museums, by Maxim Grosul, who received gifts worth 1,250 euros</b></p>
      <p>The inspiration for "The Ultimate Hub for Cyprus Museums" was the popularity of museums in Cyprus. The goal of Maxim with this idea was to help people find data about museums and ask AI Assistants about museums. He built this idea with the help of hackathon mentors to validate concepts and correct the stack. His next step is adding data, onboarding museums, and developing more features.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/M7wstA2R_Oc?si=YhSF5jO4LcWiItW_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>
      <a style={{borderRadius:0}} href="/pdfs/nicosia/Museum_Cyprus.pdf" download="presentation" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Download the project presentation.</a>
    </p>
        </Container>
      </BaseLayout>
    )
  }
  
export default overviewHackahton
