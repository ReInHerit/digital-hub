import React from "react"
import { Container, Badge, Row, Col, Button } from "react-bootstrap"
import BaseExhibitionIdentities from "../../../../../components/static/BaseExhibitionIdentities"
import QuestionTwoIdentities from "../../../../../components/shared/ExhibitionQuestions/questionsIdentities/B_questionIdentities"

const questionTwoIdentitiesPage = () => {

return (
    <BaseExhibitionIdentities>
     <div className="exh_container_inner_red mt-5">

{/*Intro text*/}
   
          <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
    

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="identitiesAnswers">
          <h2>Question: 2</h2>
            <QuestionTwoIdentities></QuestionTwoIdentities>
        </div>
        
     </div>

     <div>
<Row className="mt-5">
    <Col sm={10}>
    </Col>
    <Col sm={2}>
    <Button variant="outline-primary" size="lg" className="rounded-pill" href="exhibitions/identities/IdentitiesExhibitionOverview/">
        <h4>Skip questions</h4>
    </Button>
    </Col>
</Row>
</div>

    </BaseExhibitionIdentities>
    )
  }

export default questionTwoIdentitiesPage;