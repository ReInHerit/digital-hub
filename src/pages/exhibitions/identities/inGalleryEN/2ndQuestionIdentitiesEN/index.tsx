import React from "react"
import { Link } from "gatsby"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionTwoIdentities from "../../../../../components/shared/ExhibitionQuestions/inGalleryIdentities/B_questionIdentitiesEN"

const questionTwoIdentitiesPageEN = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner_red mt-5">

{/*Intro text*/}
   
<Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
<div className="identitiesQuestions exh_question_intro_text">
          <div className="d-flex justify-content-end">
            <Badge pill bg="danger"><h2>
            <Link to="/exhibitions/identities/inGalleryGR/2ndQuestionIdentitiesGR" style={{ color: "white" }} className="text-decoration-none">Ελληνική</Link></h2></Badge>
          </div>
          </div>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="identitiesAnswers">
          <h2>Question: 2</h2>
            <QuestionTwoIdentities></QuestionTwoIdentities>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionTwoIdentitiesPageEN;