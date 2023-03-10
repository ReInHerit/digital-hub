import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionIdentities from "../../../../../components/static/BaseExhibitionIdentities"
import QuestionThreeIdentities from "../../../../../components/shared/ExhibitionQuestions/questionsIdentities/C_questionIdentities"

const questionThreeIdentitiesPage = () => {

return (
    <BaseExhibitionIdentities>
     <div className="exh_container_inner_red mt-5">


{/*Intro text*/}
     
          <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
      

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="identitiesAnswers">
        <h2>Question: 3</h2>
            <QuestionThreeIdentities></QuestionThreeIdentities>
        </div>
        
     </div>
    </BaseExhibitionIdentities>
    )
  }

export default questionThreeIdentitiesPage;