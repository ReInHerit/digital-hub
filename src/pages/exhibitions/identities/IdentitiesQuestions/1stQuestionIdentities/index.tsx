import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import CountryFormIdentities from "../../../../../components/shared/ExhibitionQuestions/questionsIdentities/O_countryIdentities"
import QuestionOneIdentities from "../../../../../components/shared/ExhibitionQuestions/questionsIdentities/A_questionIdentities"

const questionOneIdentitiesPage = () => {

return (
    <BaseExhibitionConflict>
     <div className="exh_container_inner mt-5">

{/*Intro text*/}
 
        <Badge className="badgeConflicts rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
       

        <div className="conflictsQuestions exh_question_intro_text">
            <h4>How do you approach identities?</h4>
            <p>Note data protection: <br></br>the collected data is used exclusively for statistics purposes within the exhibition.</p>

{/*Country question*/}
            <CountryFormIdentities></CountryFormIdentities>

        </div>


{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Question: 1</h2>
            <QuestionOneIdentities></QuestionOneIdentities>
        </div>
        
     </div>
    </BaseExhibitionConflict>
    )
  }

export default questionOneIdentitiesPage;