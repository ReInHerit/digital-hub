import React from "react"
import { Link } from "gatsby"
import { Container, Badge, Row, Col } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionOneIdentities from "../../../../../components/shared/ExhibitionQuestions/inGalleryIdentities/A_questionIdentitiesGR"

const questionOneIdentitiesPageGR = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner_red mt-5">

{/*Intro text*/}
 
        <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
       
        <div className="identitiesQuestions exh_question_intro_text">
        <Row>
            <Col sm={10}>
            <h4>Πώς προσεγγίζετε τις ταυτότητες;</h4>
            <p>Σημείωση σχετικά με την προστασία των δεδομένων: <br></br> Τα δεδομένα που συλλέγονται θα χρησιμοποιηθούν αποκλειστικά για στατιστικούς σκοπούς στο πλαίσιο της έκθεσης.
            </p>
            </Col>
            <Col sm={2}>
            <div className="d-flex justify-content-end">
        <Badge pill bg="danger"><h2>
        <Link to="/exhibitions/identities/inGalleryEN/1stQuestionIdentitiesEN" style={{ color: "white" }} className="text-decoration-none">English</Link></h2></Badge>
            </div>
            </Col>
        </Row>
        </div>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="identitiesAnswers">
        <h2>Ερώτηση: 1</h2>
            <QuestionOneIdentities></QuestionOneIdentities>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionOneIdentitiesPageGR;