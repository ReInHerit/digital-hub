import React from "react"
import { Container, Badge, Row, Col, Button } from "react-bootstrap"
import BaseExhibitionIdentities from "../../../../../components/static/BaseExhibitionIdentities"
import CountryFormIdentities from "../../../../../components/shared/ExhibitionQuestions/questionsIdentities/O_countryIdentities"
import QuestionOneIdentities from "../../../../../components/shared/ExhibitionQuestions/questionsIdentities/A_questionIdentities"

const questionOneIdentitiesPage = () => {

return (
    <BaseExhibitionIdentities>
     <div className="exh_container_inner_red mt-5">

{/*Intro text*/}
 
        <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
       

        <div className="identitiesQuestions exh_question_intro_text">
            <h4>How do you approach identities?</h4>
            <p>Note data protection: <br></br>the collected data is used exclusively for statistics purposes within the exhibition.</p>

{/*Country question*/}
            <CountryFormIdentities></CountryFormIdentities>

        </div>


{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="identitiesAnswers">
        <h2>Question: 1</h2>
            <QuestionOneIdentities></QuestionOneIdentities>
        </div>
        
     </div>

     <div>
<Row className="mt-5">
    <Col sm={10}>
    </Col>
    <Col sm={2}>
    <Button variant="outline-primary" size="lg" className="rounded-pill" href="exhibitions/identities/IdentitiesExhibitionOverview/">
        <h4>Skip questions</h4>
    </Button>
    </Col>
</Row>
</div>

    </BaseExhibitionIdentities>
    )
  }

export default questionOneIdentitiesPage;