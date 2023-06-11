import React from "react"
import { Container, Badge, Row, Col, Button } from "react-bootstrap"
import BaseExhibitionCraftmanship from "../../../../../components/static/BaseExhibitionCraftmanship"
import CountryFormCraftmanship from "../../../../../components/shared/ExhibitionQuestions/questionsCraftmanship/O_countryCraftmanship"
import QuestionOneCraftmanship from "../../../../../components/shared/ExhibitionQuestions/questionsCraftmanship/A_questionCraftmanship"

const questionOneCraftmanshipPage = () => {

return (
    <BaseExhibitionCraftmanship>
     <div className="exh_container_inner_green mt-5">

{/*Intro text*/}
 
        <Badge className="badgeCraftmanship rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
       

        <div className="craftmanshipQuestions exh_question_intro_text">
            <h4>How do you approach craftmanship?</h4>
            <p>Note data protection: <br></br>the collected data is used exclusively for statistics purposes within the exhibition.</p>

{/*Country question*/}
            <CountryFormCraftmanship></CountryFormCraftmanship>

        </div>


{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="craftmanshipAnswers">
        <h2>Question: 1</h2>
            <QuestionOneCraftmanship></QuestionOneCraftmanship>
        </div>
        
     </div>

     <div>
<Row className="mt-5">
    <Col sm={10}>
    </Col>
    <Col sm={2}>
    <Button variant="outline-primary" size="lg" className="rounded-pill" href="exhibitions/craftmanship/CraftmanshipExhibitionOverview/">
        <h4>Skip questions</h4>
    </Button>
    </Col>
</Row>
</div>

    </BaseExhibitionCraftmanship>
    )
  }

export default questionOneCraftmanshipPage;