import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import QuestionFourConflict from "../../../../../components/shared/ExhibitionQuestions/questionsConflict/D_questionConflict"

const questionFourConflictPage = () => {

return (
    <BaseExhibitionConflict>
      <div className="exh_container_inner mt-5">

{/*Intro text*/}
    <div className="conflictsQuestions exh_question_intro_text">
              <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
        
    </div>
{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Question: 4</h2>
            <QuestionFourConflict></QuestionFourConflict>
        </div>
        
     </div>

     <div>
<Row className="mt-5">
    <Col sm={10}>
    </Col>
    <Col sm={2}>
    <Button variant="outline-primary" size="lg" className="rounded-pill" href="exhibitions/conflicts/ConflictExhibitionMap/">
        <h4>Skip questions</h4>
    </Button>
    </Col>
</Row>
</div>

    </BaseExhibitionConflict>
    )
  }

export default questionFourConflictPage;