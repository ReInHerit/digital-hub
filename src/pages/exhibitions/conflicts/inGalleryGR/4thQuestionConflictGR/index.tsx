import React from "react"
import { Link } from "gatsby"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionFourConflictGR from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/D_questionConflictGR"

const questionFourConflictPageGR = () => {

return (
    <BaseExhibitionConflictDE>
      <div className="exh_container_inner mt-5">

{/*Intro text*/}
    <div className="conflictsQuestions exh_question_intro_text">
              <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
              <div className="d-flex justify-content-end">
            <Badge pill bg="primary"><h2>
            <Link to="/exhibitions/conflicts/inGalleryEN/4thQuestionConflictEN" style={{ color: "white" }} className="text-decoration-none">English</Link></h2></Badge>
            </div>
    </div>
{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Ερώτηση: 4</h2>
            <QuestionFourConflictGR></QuestionFourConflictGR>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionFourConflictPageGR;