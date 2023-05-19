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
        Audience feedback</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>Thanks for taking part in the ReInHerit performance at the Bank of Cyprus Cultural Foundation!</p>
<p>We have prepared a short anonymous questionnaire to collect your feedback on this experience: you can find it below and we would be grateful for your comments!</p>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf3SZ3Q-qO8YQV1Y-SU7X34bAFtWmAGaM9clW2IOUHmgl-T0g/viewform?embedded=true" width="100%" height="3386" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
<p></p>
    
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default IntroSecondPerf