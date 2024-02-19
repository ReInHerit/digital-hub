import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavDoc from "../../components/static/secondPerfDocNav"
import { Container } from "react-bootstrap"


const spApplication = () => {
    return (
      <BaseLayout
      pageTitle="Performance at the Bank of Cyprus Cultural Foundation || Documentation"
    >
      <MainHeading subHeading="ReInHerit a Museum - Documentation">
      Application Documentation and Code</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
      <SideBarsLayout left={<SecondPerfNavDoc />}>
      <p>This document presents a short description for the setting up and usage of the source code developed to support the immersive performance for the ReInHerit project that took place at the Bank of Cyprus Cultural Foundation on the 19th of May 2023. The purpose of the document is to facilitate users who wish to recreate a similar experience to their own premises. The code for the application can be accessed from the following <a href="https://github.com/CYENS/ReInHeritArApp">GitHub repository link</a>.</p>
      
      <p>
    <a style={{borderRadius:0}} href="/pdfs/ReInHerit a Museum AR Application - Techncial Documentation.pdf" download="Application Documentation" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the documentation of the application.</a>
    </p>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default spApplication