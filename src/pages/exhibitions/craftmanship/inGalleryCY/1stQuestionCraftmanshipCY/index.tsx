import React from "react"
import { Link } from "gatsby"
import { Container, Badge, Row, Col } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionOneCraftmanship from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/A_questionCraftmanshipCY"

const questionOneCraftmanshipPageGR = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner_green mt-5">

{/*Intro text*/}
 
        <Badge className="badgeCraftmanship rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1>
        </Badge>
      
        <div className="craftmanshipQuestions exh_question_intro_text">
        <Row>
            <Col sm={10}>
            <h4>Ποια είναι η γνώμη σας για τη δεξιοτεχνία;</h4>
            <p>Σημείωση σχετικά με την προστασία των δεδομένων: <br></br> Τα δεδομένα που συλλέγονται θα χρησιμοποιηθούν αποκλειστικά για στατιστικούς σκοπούς στο πλαίσιο της έκθεσης.
            </p>
            </Col>
            <Col sm={2}>
            <div className="d-flex justify-content-end">
            <Badge pill bg="success"><h2>
                <Link to="/exhibitions/craftmanship/inGalleryEN/1stQuestionCraftmanshipEN" style={{ color: "white" }} className="text-decoration-none">English</Link></h2></Badge>
            </div>
            </Col>
        </Row>
        </div>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="craftmanshipAnswers">
        <h2>Ερώτηση: 1</h2>
            <QuestionOneCraftmanship></QuestionOneCraftmanship>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionOneCraftmanshipPageGR;