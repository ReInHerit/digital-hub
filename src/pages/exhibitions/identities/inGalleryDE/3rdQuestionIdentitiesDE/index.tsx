import React from "react"
import { Link } from "gatsby"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionThreeIdentities from "../../../../../components/shared/ExhibitionQuestions/inGalleryIdentities/C_questionIdentitiesDE"

const questionThreeIdentitiesPageGR = () => {

return (
    <BaseExhibitionConflictDE>
     <div className="exh_container_inner_red mt-5" style={{maxWidth: "75%", margin: "12.5%"}}>


{/*Intro text*/}
<a id="Question3IdentitiesDE"></a>

          <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
          <div className="identitiesQuestions exh_question_intro_text">
          <div className="d-flex justify-content-end">
            <Badge pill bg="danger"><h2>
            <Link to="/exhibitions/identities/inGalleryEN/3rdQuestionIdentitiesEN/#Question3IdentitiesEN" style={{ color: "white" }} className="text-decoration-none">English</Link></h2></Badge>
          </div>
          </div>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="identitiesAnswers">
        <h2>Frage: 3</h2>
            <QuestionThreeIdentities></QuestionThreeIdentities>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionThreeIdentitiesPageGR;