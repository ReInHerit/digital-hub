import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import QuestionFourCraftmanship from "../../../../../components/shared/ExhibitionQuestions/questionsCraftmanship/D_questionCraftmanship"

const questionFourCraftmanshipPage = () => {

return (
    <BaseExhibitionConflict>
      <div className="exh_container_inner mt-5">

{/*Intro text*/}
    <div className="conflictsQuestions exh_question_intro_text">
              <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
        
    </div>
{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Question: 4</h2>
            <QuestionFourCraftmanship></QuestionFourCraftmanship>
        </div>
        
     </div>
    </BaseExhibitionConflict>
    )
  }

export default questionFourCraftmanshipPage;