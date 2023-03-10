import React from "react"
import { Link } from "gatsby"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import QuestionFourCraftmanship from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/D_questionCraftmanshipEN"

const questionFourCraftmanshipPageEN = () => {

return (
    <BaseExhibitionConflictDE>
      <div className="exh_container_inner_green mt-5">

{/*Intro text*/}
    <Badge className="badgeCraftmanship rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>

    <div className="craftmanshipQuestions exh_question_intro_text">
          <div className="d-flex justify-content-end">
            <Badge pill bg="success"><h2>
            <Link to="/exhibitions/craftmanship/inGalleryCY/4thQuestionCraftmanshipCY" style={{ color: "white" }} className="text-decoration-none">Ελληνική</Link></h2></Badge>
          </div>
          </div>        

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="craftmanshipAnswers">
        <h2>Question: 4</h2>
            <QuestionFourCraftmanship></QuestionFourCraftmanship>
        </div>
        
     </div>
    </BaseExhibitionConflictDE>
    )
  }

export default questionFourCraftmanshipPageEN;