import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionCraftmanship from "../../../../../components/static/BaseExhibitionCraftmanship"
import QuestionFourCraftmanship from "../../../../../components/shared/ExhibitionQuestions/questionsCraftmanship/D_questionCraftmanship"

const questionFourCraftmanshipPage = () => {

return (
    <BaseExhibitionCraftmanship>
      <div className="exh_container_inner_green mt-5">

{/*Intro text*/}
    <div className="craftmanshipQuestions exh_question_intro_text">
              <Badge className="badgeCraftmanship rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
        
    </div>
{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="craftmanshipAnswers">
        <h2>Question: 4</h2>
            <QuestionFourCraftmanship></QuestionFourCraftmanship>
        </div>
        
     </div>
    </BaseExhibitionCraftmanship>
    )
  }

export default questionFourCraftmanshipPage;