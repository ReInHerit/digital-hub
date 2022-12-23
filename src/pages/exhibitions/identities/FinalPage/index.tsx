import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionIdent from "../../../../components/static/BaseExhibitionIdentities"

const IdentitiesAnswers: React.FC = () => {



return (
<BaseExhibitionIdent>
  <Container fluid className="mt-5 p-5" style={{borderColor: "blue"}}>
  <div className="d-grid gap-2">
  <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
  </div>
  <h4>
    Your Answers to the four questions - note: in this demo, only two questions are included (one before, one after the object views)
  </h4>

<div>

    
</div>


  </Container>
</BaseExhibitionIdent>
    )
  }



export default IdentitiesAnswers