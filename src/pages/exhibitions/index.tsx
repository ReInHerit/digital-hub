import React from "react"
import { Container, Button } from "react-bootstrap"
import BaseExhibition from "../../components/static/BaseExhibition"

const DigitalExhibsLanding = () => {

return (
<BaseExhibition>
  <Container fluid className="mt-5 p-5" style={{backgroundColor:"white"}}>
  <div className="d-grid gap-2">
      <Button href="exhibitions/conflicts/ConflictQuestions/1stQuestionConflict" className="btnExhibit rounded-pill" size="lg">ReThinking CONFLICTS</Button>
      <Button className="btnExhibit rounded-pill" size="lg">ReThinking IDENTITIES - opening 16th March 2023</Button>
      <Button className="btnExhibit rounded-pill" size="lg">ReThinking CRAFTSMANSHIP - opening 6th March 2023</Button>
  </div>
  
  </Container>
</BaseExhibition>
    )
  }

export default DigitalExhibsLanding;