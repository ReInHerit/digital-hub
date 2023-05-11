import React from "react"
import { Link } from "gatsby"
import { Container, Badge, Row, Col } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionOneConflictGR from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/A_questionConflictGR"

const questionOneConflictPageGR = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner mt-5">

{/*Intro text*/}
 
        <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
        <Row>
            <Col sm={10}>
            <h4>Πώς προσεγγίζετε τις συγκρούσεις;</h4>
            <p>Σημείωση σχετικά με την προστασία των προσωπικών δεδομένων:<br></br>Τα δεδομένα που συλλέγονται θα χρησιμοποιούνται αποκλειστικά για στατιστικούς σκοπούς στο πλαίσιο της έκθεσης.</p>
            </Col>
            <Col sm={2}>
            <div className="d-flex justify-content-end">
            <Badge pill bg="primary"><h2>
            <Link to="/exhibitions/conflicts/inGalleryEN/1stQuestionConflictEN" style={{ color: "white" }} className="text-decoration-none">English</Link></h2></Badge>
            </div>
            </Col>
        </Row>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Ερώτηση: 1</h2>
            <QuestionOneConflictGR></QuestionOneConflictGR>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionOneConflictPageGR;