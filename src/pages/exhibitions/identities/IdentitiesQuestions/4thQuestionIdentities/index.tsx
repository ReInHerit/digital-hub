import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import QuestionFourIdentities from "../../../../../components/shared/ExhibitionQuestions/questionsIdentities/D_questionIdentities"

const questionFourIdentitiesPage = () => {

return (
    <BaseExhibitionConflict>
      <div className="exh_container_inner mt-5">

{/*Intro text*/}
    <div className="conflictsQuestions exh_question_intro_text">
              <Badge className="badgeConflicts rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
        
    </div>
{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Question: 4</h2>
            <QuestionFourIdentities></QuestionFourIdentities>
        </div>
        
     </div>
    </BaseExhibitionConflict>
    )
  }

export default questionFourIdentitiesPage;