import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionThreeConflictDE from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/C_questionConflictDE"

const questionThreeConflictPageDE = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner mt-5">


{/*Intro text*/}
     
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
      

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Frage: 3</h2>
            <QuestionThreeConflictDE></QuestionThreeConflictDE>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionThreeConflictPageDE;