import React from "react"
import { Link } from "gatsby"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionThreeConflictEN from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/C_questionConflictEN"

const questionThreeConflictPageEN = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner mt-5">


{/*Intro text*/}
     
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
          <div className="d-flex justify-content-end">
            <Badge pill bg="primary"><h2>
            <Link to="/exhibitions/conflicts/inGalleryGR/3rdQuestionConflictGR" style={{ color: "white" }} className="text-decoration-none">Ελληνικά </Link></h2></Badge>
          </div>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Question: 3</h2>
            <QuestionThreeConflictEN></QuestionThreeConflictEN>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionThreeConflictPageEN;