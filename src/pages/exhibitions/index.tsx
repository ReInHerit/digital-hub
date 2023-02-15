import React from "react"
import { Container, Button } from "react-bootstrap"
import BaseExhibition from "../../components/static/BaseExhibition"

const DigitalExhibsLanding = () => {

return (
<BaseExhibition>
  <Container fluid className="exhibition_intro" style={{backgroundColor:"white"}}>
      <Button href="exhibitions/conflicts/ConflictQuestions/1stQuestionConflict" className="btnExhibit rounded-pill" size="lg">ReThinking CONFLICTS</Button>
      <Button className="btnExhibit rounded-pill btnExhibitDisabled" size="lg">
        <div className="visible_btn_text">ReThinking CRAFTSMANSHIP</div>
        <div className="hidden_btn_text">opening 9th March 2023</div>
      </Button>
      <Button className="btnExhibit rounded-pill btnExhibitDisabled" size="lg">
        <div className="visible_btn_text">ReThinking IDENTITIES</div>
        <div className="hidden_btn_text">opening 16th March 2023</div>
      </Button>
  </Container>
</BaseExhibition>
    )
  }

export default DigitalExhibsLanding;