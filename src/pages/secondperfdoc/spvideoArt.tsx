import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavDoc from "../../components/static/secondPerfDocNav"
import { Container } from "react-bootstrap"


const spVideoArt = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation || Documentation"
      >
        <MainHeading subHeading="ReInHerit a Museum - Documentation">
        Video Art</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavDoc />}>

        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default spVideoArt
