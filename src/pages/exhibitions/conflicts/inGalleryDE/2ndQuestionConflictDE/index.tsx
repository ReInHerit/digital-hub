import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionTwoConflictDE from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/B_questionConflictDE"
import RestartModal from "../../../../../components/shared/ExhibitionQuestions/RestartModal"

const questionTwoConflictPageDE = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner mt-5" style={{maxWidth: "75%", margin: "12.5%"}}>

{/*Intro text*/}
          <a id="Question2ConflDE"></a>
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>

<div>
  <RestartModal></RestartModal>
</div>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
          <h2>Frage: 2</h2>
            <QuestionTwoConflictDE></QuestionTwoConflictDE>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionTwoConflictPageDE;