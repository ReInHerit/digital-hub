import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import CountryFormCraftmanship from "../../../../../components/shared/ExhibitionQuestions/questionsCraftmanship/O_countryCraftmanship"
import QuestionOneCraftmanship from "../../../../../components/shared/ExhibitionQuestions/questionsCraftmanship/A_questionCraftmanship"

const questionOneCraftmanshipPage = () => {

return (
    <BaseExhibitionConflict>
     <div className="exh_container_inner mt-5">

{/*Intro text*/}
 
        <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
       

        <div className="conflictsQuestions exh_question_intro_text">
            <h4>How do you approach craftmanship?</h4>
            <p>Note data protection: <br></br>the collected data is used exclusively for statistics purposes within the exhibition.</p>

{/*Country question*/}
            <CountryFormCraftmanship></CountryFormCraftmanship>

        </div>


{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
        <h2>Question: 1</h2>
            <QuestionOneCraftmanship></QuestionOneCraftmanship>
        </div>
        
     </div>
    </BaseExhibitionConflict>
    )
  }

export default questionOneCraftmanshipPage;