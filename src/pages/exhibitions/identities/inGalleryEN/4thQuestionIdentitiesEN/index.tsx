import React from "react"
import { Link } from "gatsby"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionFourIdentities from "../../../../../components/shared/ExhibitionQuestions/inGalleryIdentities/D_questionIdentitiesEN"

const questionFourIdentitiesPageEN = () => {

return (
    <BaseExhibitionConflictDE>
      <div className="exh_container_inner_red mt-5">

{/*Intro text*/}
    <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>

    <div className="identitiesQuestions exh_question_intro_text">
          <div className="d-flex justify-content-end">
            <Badge pill bg="danger"><h2>
            <Link to="/exhibitions/identities/inGalleryGR/4thQuestionIdentitiesGR" style={{ color: "white" }} className="text-decoration-none">Ελληνικά </Link></h2></Badge>
          </div>
          </div>
                  
{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="identitiesAnswers">
        <h2>Question: 4</h2>
            <QuestionFourIdentities></QuestionFourIdentities>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionFourIdentitiesPageEN;