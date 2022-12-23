import React from "react"
import { Container, Button } from "react-bootstrap"
import BaseExhibition from "../../components/static/BaseExhibition"

const DigitalExhibsLanding = () => {

return (
<BaseExhibition>
  <Container fluid className="mt-5 p-5" style={{backgroundColor:"white"}}>
  <div className="d-grid gap-2">
      <Button href="exhibitions/identities/questionOne" className="btnExhibit rounded-pill" size="lg">ReThinking IDENTITIES - use this for demo</Button>
      <Button className="btnExhibit rounded-pill" size="lg">ReThinking CONFLICTS - not implemented</Button>
      <Button className="btnExhibit rounded-pill" size="lg">ReThinking CRAFTMANSHIP - not implemented</Button>
  </div>
  </Container>
</BaseExhibition>
    )
  }

export default DigitalExhibsLanding;