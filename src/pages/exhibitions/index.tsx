import React from "react"
import { Container, Button } from "react-bootstrap"
import BaseExhibition from "../../components/static/BaseExhibition"

const DigitalExhibsLanding = () => {

return (
<BaseExhibition>
  <Container fluid className="exhibition_intro" style={{backgroundColor:"white"}}>
      <Button href="exhibitions/conflicts/ConflictQuestions/1stQuestionConflict" className="btnExhibit rounded-pill" size="lg">ReThinking CONFLICTS</Button>
      <Button href="exhibitions/craftmanship/CraftmanshipQuestions/1stQuestionCraftmanship" className="btnExhibit_green rounded-pill" size="lg">ReThinking CRAFTSMANSHIP</Button>
      <Button href="exhibitions/identities/IdentitiesQuestions/1stQuestionIdentities" className="btnExhibit_red rounded-pill" size="lg">ReThinking IDENTITIES</Button>
  </Container>
</BaseExhibition>
    )
  }

export default DigitalExhibsLanding;