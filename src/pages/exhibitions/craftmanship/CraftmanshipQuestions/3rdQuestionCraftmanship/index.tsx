import React from "react"
import { Container, Badge } from "react-bootstrap"
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
    </BaseExhibitionCraftmanship>
    )
  }

export default questionThreeCraftmanshipPage;