import React from "react"
import { Link } from "gatsby"
import { Container, Badge, Row, Col } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionOneConflictEN from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/A_questionConflictEN"

const questionOneConflictPageEN = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner mt-5">

{/*Intro text*/}
 
        <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
        <Row>
            <Col sm={10}>
            <h4>How do you approach conflicts?</h4>
            <p>Note data protection: <br></br>the collected data is used exclusively for statistics purposes within the exhibition.</p>
            </Col>
            <Col sm={2}>
            <div className="d-flex justify-content-end">
            <Badge pill bg="primary"><h2>
            <Link to="/exhibitions/conflicts/inGalleryGR/1stQuestionConflictGR" style={{ color: "white" }} className="text-decoration-none">Ελληνικά </Link></h2></Badge>
            </div>
            </Col>
        </Row>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Question: 1</h2>
            <QuestionOneConflictEN></QuestionOneConflictEN>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionOneConflictPageEN;