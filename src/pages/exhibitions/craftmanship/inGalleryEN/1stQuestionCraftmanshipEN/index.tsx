import React from "react"
import { Link } from "gatsby"
import { Container, Badge, Row, Col } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionOneCraftmanship from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/A_questionCraftmanshipEN"

const questionOneCraftmanshipPageEN = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner_green mt-5">

{/*Intro text*/}
 
        <Badge className="badgeCraftmanship rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
       
        <div className="craftmanshipQuestions exh_question_intro_text">
        <Row>
            <Col sm={10}>
            <h4>How do you approach craftmanship?</h4>
            <p>Note data protection: <br></br>the collected data is used exclusively for statistics purposes within the exhibition.</p>
            </Col>
            <Col sm={2}>
            <div className="d-flex justify-content-end">
            <Badge pill bg="success"><h2>
            <Link to="/exhibitions/craftmanship/inGalleryCY/1stQuestionCraftmanshipCY" style={{ color: "white" }} className="text-decoration-none">Ελληνική</Link></h2></Badge>
            </div>
            </Col>
        </Row>
        </div>

       

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="craftmanshipAnswers">
        <h2>Question: 1</h2>
            <QuestionOneCraftmanship></QuestionOneCraftmanship>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionOneCraftmanshipPageEN;