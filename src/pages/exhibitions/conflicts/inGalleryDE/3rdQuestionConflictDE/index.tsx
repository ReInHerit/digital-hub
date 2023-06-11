import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionThreeConflictDE from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/C_questionConflictDE"
import RestartModal from "../../../../../components/shared/ExhibitionQuestions/RestartModal"

const questionThreeConflictPageDE = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner mt-5" style={{maxWidth: "75%", margin: "12.5%"}}>

{/*Intro text*/}
          <a id="Question3ConflDE"></a>
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
      
          <div>
           <RestartModal></RestartModal>
          </div>

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