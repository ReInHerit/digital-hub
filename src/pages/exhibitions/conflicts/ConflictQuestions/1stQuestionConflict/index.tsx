import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import CountryFormConflict from "../../../../../components/shared/ExhibitionQuestions/questionsConflict/O_countryConflict"
import QuestionOneConflict from "../../../../../components/shared/ExhibitionQuestions/questionsConflict/A_questionConflict"

const questionOneConflictPage = () => {

return (
    <BaseExhibitionConflict>
     <div className="exh_container_inner mt-5">

{/*Intro text*/}
 
        <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
       

        <div className="conflictsQuestions exh_question_intro_text">
            <h4>How do you approach conflicts?</h4>
            <p>Note data protection: <br></br>the collected data is used exclusively for statistics purposes within the exhibition.</p>

{/*Country question*/}
            <CountryFormConflict></CountryFormConflict>

        </div>


{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Question: 1</h2>
            <QuestionOneConflict></QuestionOneConflict>
        </div>
        
     </div>

<div>
<Row className="mt-5">
    <Col sm={10}>
    </Col>
    <Col sm={2}>
    <Button variant="outline-primary" size="lg" className="rounded-pill" href="exhibitions/conflicts/ConflictExhibitionOverview/">
        <h4>Skip questions</h4>
    </Button>
    </Col>
</Row>
</div>

    </BaseExhibitionConflict>
    )
  }

export default questionOneConflictPage;