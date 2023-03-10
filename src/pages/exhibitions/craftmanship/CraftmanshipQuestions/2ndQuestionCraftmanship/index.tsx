import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionCraftmanship from "../../../../../components/static/BaseExhibitionCraftmanship"
import QuestionTwoCraftmanship from "../../../../../components/shared/ExhibitionQuestions/questionsCraftmanship/B_questionCraftmanship"

const questionTwoCraftmanshipPage = () => {

return (
    <BaseExhibitionCraftmanship>
     <div className="exh_container_inner_green mt-5">

{/*Intro text*/}
   
          <Badge className="badgeCraftmanship rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
    

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="craftmanshipAnswers">
          <h2>Question: 2</h2>
            <QuestionTwoCraftmanship></QuestionTwoCraftmanship>
        </div>
        
     </div>
    </BaseExhibitionCraftmanship>
    )
  }

export default questionTwoCraftmanshipPage;