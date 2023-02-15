import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";
import { Container } from "react-bootstrap"

const digitalCall = () => {

    return <BaseLayout>
     <MainHeading  
    breadCrumb={[
          {label:"Digital Collection", value:"/museumcalls/digital"},
        ]}
        subText="Contribute to the ReInHerit digital collection."
        >
    </MainHeading>
    <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
      <h1>Contribute to the digital collection</h1>
      <p>Discover more in this brochure.</p>
    <a style={{borderRadius:0}} href="/images/tempBrochures/RIH-BRO-DIGITAL.pdf" download="museumcall_digital" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click here to see the brochure and download it!</a>
    </Container>
    </BaseLayout>
  
  }
  
  
  export default digitalCall;