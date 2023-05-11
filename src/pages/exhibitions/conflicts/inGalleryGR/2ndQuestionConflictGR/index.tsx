import React from "react"
import { Link } from "gatsby"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionTwoConflictGR from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/B_questionConflictGR"

const questionTwoConflictPageGR = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner mt-5">

{/*Intro text*/}
   
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
          <div className="d-flex justify-content-end">
            <Badge pill bg="primary"><h2>
            <Link to="/exhibitions/conflicts/inGalleryEN/2ndQuestionConflictEN" style={{ color: "white" }} className="text-decoration-none">English</Link></h2></Badge>
            </div>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
          <h2>Ερώτηση: 2</h2>
            <QuestionTwoConflictGR></QuestionTwoConflictGR>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionTwoConflictPageGR;