import React from "react"
import { Container, Badge, Row, Col, Button } from "react-bootstrap"
import BaseExhibitionIdentities from "../../../../../components/static/BaseExhibitionIdentities"
import QuestionFourIdentities from "../../../../../components/shared/ExhibitionQuestions/questionsIdentities/D_questionIdentities"

const questionFourIdentitiesPage = () => {

return (
    <BaseExhibitionIdentities>
      <div className="exh_container_inner_red mt-5">

{/*Intro text*/}
    <div className="identitiesQuestions exh_question_intro_text">
              <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
        
    </div>
{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="identitiesAnswers">
        <h2>Question: 4</h2>
            <QuestionFourIdentities></QuestionFourIdentities>
        </div>
        
     </div>

     <div>
<Row className="mt-5">
    <Col sm={10}>
    </Col>
    <Col sm={2}>
    <Button variant="outline-primary" size="lg" className="rounded-pill" href="exhibitions/identities/IdentitiesExhibitionMap/">
        <h4>Skip questions</h4>
    </Button>
    </Col>
</Row>
</div>
     
    </BaseExhibitionIdentities>
    )
  }

export default questionFourIdentitiesPage;