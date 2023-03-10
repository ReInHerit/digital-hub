import React from "react"
import { Link } from "gatsby"
import { Container, Badge, Row, Col } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionOneIdentities from "../../../../../components/shared/ExhibitionQuestions/inGalleryIdentities/A_questionIdentitiesEN"

const questionOneIdentitiesPageEN = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner_red mt-5">

{/*Intro text*/}
 
        <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
        <div className="identitiesQuestions exh_question_intro_text">
        <Row>
            <Col sm={10}>
            <h4>How do you approach identities?</h4>
            <p>Note data protection: <br></br>the collected data is used exclusively for statistics purposes within the exhibition.</p>
            </Col>
            <Col sm={2}>
            <div className="d-flex justify-content-end">
            <Badge pill bg="danger"><h2>
            <Link to="/exhibitions/identities/inGalleryGR/1stQuestionIdentitiesGR" style={{ color: "white" }} className="text-decoration-none">Ελληνική</Link></h2></Badge>
            </div>
            </Col>
        </Row>
        </div>  

       
{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="identitiesAnswers">
        <h2>Question: 1</h2>
            <QuestionOneIdentities></QuestionOneIdentities>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionOneIdentitiesPageEN;