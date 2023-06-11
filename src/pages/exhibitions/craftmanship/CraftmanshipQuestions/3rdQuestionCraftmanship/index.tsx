import React from "react"
import { Container, Badge, Row, Col, Button } from "react-bootstrap"
import BaseExhibitionCraftmanship from "../../../../../components/static/BaseExhibitionCraftmanship"
import QuestionThreeCraftmanship from "../../../../../components/shared/ExhibitionQuestions/questionsCraftmanship/C_questionCraftmanship"

const questionThreeCraftmanshipPage = () => {

return (
    <BaseExhibitionCraftmanship>
     <div className="exh_container_inner_green mt-5">


{/*Intro text*/}
     
          <Badge className="badgeCraftmanship rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
      

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="craftmanshipAnswers">
        <h2>Question: 2</h2>
            <QuestionThreeCraftmanship></QuestionThreeCraftmanship>
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

export default questionThreeCraftmanshipPage;