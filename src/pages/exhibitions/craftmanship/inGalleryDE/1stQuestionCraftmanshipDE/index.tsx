import React from "react"
import { Link } from "gatsby"
import { Container, Badge, Row, Col } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionOneCraftmanship from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/A_questionCraftmanshipDE"

const questionOneCraftmanshipPageEN = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner mt-5" style={{maxWidth: "75%", margin: "12.5%"}}>

{/*Intro text*/}
<a id="Question1CraftmDE"></a>

        <Badge className="badgeCraftmanship rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
       
        <div className="craftmanshipQuestions exh_question_intro_text">
        <Row>
            <Col sm={10}>
            <h4>Wie gehen Sie mit Konflikten um?</h4>
            <p>Hinweis zum Datenschutz: <br></br>Die erhobenen Daten werden ausschließlich zu statistischen Zwecken innerhalb der Ausstellung verwendet.</p>            </Col>
            <Col sm={2}>
            <div className="d-flex justify-content-end">
            <Badge pill bg="success"><h2>
            <Link to="/exhibitions/craftmanship/inGalleryDE/1stQuestionCraftmanshipDE" style={{ color: "white" }} className="text-decoration-none">English</Link></h2></Badge>
            </div>
            </Col>
        </Row>
        </div>

       

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="craftmanshipAnswers">
        <h2>Frage: 1</h2>
            <QuestionOneCraftmanship></QuestionOneCraftmanship>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionOneCraftmanshipPageEN;