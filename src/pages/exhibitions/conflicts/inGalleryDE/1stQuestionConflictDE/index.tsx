import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionOneConflictDE from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/A_questionConflictDE"

const questionOneConflictPageDE = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner mt-5" style={{maxWidth: "75%", margin: "12.5%"}}>

{/*Intro text*/}
        <a id="Question1ConflDE"></a>
        <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
       

        <div className="conflictsQuestions exh_question_intro_text">
            <h4>Wie gehen Sie mit Konflikten um?</h4>
            <p>Hinweis zum Datenschutz: <br></br>Die erhobenen Daten werden ausschließlich zu statistischen Zwecken innerhalb der Ausstellung verwendet.</p>
        </div>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Frage: 1</h2>
            <QuestionOneConflictDE></QuestionOneConflictDE>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionOneConflictPageDE;