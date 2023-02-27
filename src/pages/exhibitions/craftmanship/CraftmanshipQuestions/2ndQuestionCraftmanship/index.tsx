import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import QuestionTwoCraftmanship from "../../../../../components/shared/ExhibitionQuestions/questionsCraftmanship/B_questionCraftmanship"

const questionTwoCraftmanshipPage = () => {

return (
    <BaseExhibitionConflict>
     <div className="exh_container_inner mt-5">

{/*Intro text*/}
   
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
    

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
          <h2>Question: 2</h2>
            <QuestionTwoCraftmanship></QuestionTwoCraftmanship>
        </div>
        
     </div>
    </BaseExhibitionConflict>
    )
  }

export default questionTwoCraftmanshipPage;