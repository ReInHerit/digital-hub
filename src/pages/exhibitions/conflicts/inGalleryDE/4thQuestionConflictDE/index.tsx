import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionFourConflictDE from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/D_questionConflictDE"

const questionFourConflictPageDE = () => {

return (
    <BaseExhibitionConflictDE>
      <div className="exh_container_inner mt-5">

{/*Intro text*/}
    <div className="conflictsQuestions exh_question_intro_text">
              <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
        
    </div>
{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Frage: 4</h2>
            <QuestionFourConflictDE></QuestionFourConflictDE>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionFourConflictPageDE;