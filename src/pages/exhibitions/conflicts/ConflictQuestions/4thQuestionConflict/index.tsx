import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import QuestionFourConflict from "../../../../../components/shared/ExhibitionQuestions/questionsConflict/D_questionConflict"

const questionFourConflictPage = () => {

return (
    <BaseExhibitionConflict>
     <Container fluid className="mt-5 p-5">

{/*Intro text*/}
        <div className="d-grid gap-2">
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
        </div>

{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
            <QuestionFourConflict></QuestionFourConflict>
        </div>
        
     </Container>
    </BaseExhibitionConflict>
    )
  }

export default questionFourConflictPage;