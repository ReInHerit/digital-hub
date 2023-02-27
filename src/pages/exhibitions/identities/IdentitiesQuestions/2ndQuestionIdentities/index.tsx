import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import QuestionTwoIdentities from "../../../../../components/shared/ExhibitionQuestions/questionsIdentities/B_questionIdentities"

const questionTwoIdentitiesPage = () => {

return (
    <BaseExhibitionConflict>
     <div className="exh_container_inner mt-5">

{/*Intro text*/}
   
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
    

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
          <h2>Question: 2</h2>
            <QuestionTwoIdentities></QuestionTwoIdentities>
        </div>
        
     </div>
    </BaseExhibitionConflict>
    )
  }

export default questionTwoIdentitiesPage;