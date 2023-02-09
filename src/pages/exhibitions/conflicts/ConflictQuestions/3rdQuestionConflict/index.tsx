import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import QuestionThreeConflict from "../../../../../components/shared/ExhibitionQuestions/questionsConflict/C_questionConflict"

const questionThreeConflictPage = () => {

return (
    <BaseExhibitionConflict>
     <div className="exh_container_inner mt-5">


{/*Intro text*/}
     
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
      

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Question: 3</h2>
            <QuestionThreeConflict></QuestionThreeConflict>
        </div>
        
     </div>
    </BaseExhibitionConflict>
    )
  }

export default questionThreeConflictPage;