import React from "react"
import { Container, Badge, Button } from "react-bootstrap"
import BaseExhibitionIdent from "../../../../components/static/BaseExhibitionIdentities"

const IdentitiesExhibit = () => {

return (
<BaseExhibitionIdent>
  <Container fluid className="mt-5 p-5">
  <div className="d-grid gap-2">
  <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
  </div>
  <div className="identities">
  <h4>What is your relationship to conflicts? <br />
Find out by answering the quiz questions</h4>

<h1>Question 1:
During one of his performances on the open stage, a German artist slaughtered a fun-loving pig and let it bleed dry. After the action,
the dead pig was taken to the Rendering Shop. Should pigs be killed in the interests of art?</h1>

<div className="d-grid gap-2">
<Button href="exhibitions/identities/Intro" className="btn-primary rounded-pill m-5"><h1 style={{color: "white"}}>Next Question (note: for the purposes of this demo, this is going straight to the intro)</h1></Button>
</div>
</div>

  </Container>
</BaseExhibitionIdent>
    )
  }

export default IdentitiesExhibit;