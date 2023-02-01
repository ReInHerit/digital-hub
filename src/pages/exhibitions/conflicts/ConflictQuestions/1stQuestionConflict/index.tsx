import React from "react"
import { Container, Badge } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import CountryFormConflict from "../../../../../components/shared/ExhibitionQuestions/questionsConflict/O_countryConflict"
import QuestionOneConflict from "../../../../../components/shared/ExhibitionQuestions/questionsConflict/A_questionConflict"

const questionOneConflictPage = () => {

return (
    <BaseExhibitionConflict>
     <Container fluid className="mt-5 p-5">

{/*Intro text*/}
        <div className="d-grid gap-2">
          <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
        </div>

        <div className="conflictsQuestions">
            <h4>What is your relationship to conflicts? <br />
            Find out by answering three quick questions</h4>

{/*Country question*/}
            <CountryFormConflict></CountryFormConflict>

        </div>


{/*Actual Form answers - radio checks; followed by button to next page*/}
        <div className="conflictsAnswers">
            <QuestionOneConflict></QuestionOneConflict>
        </div>
        
     </Container>
    </BaseExhibitionConflict>
    )
  }

export default questionOneConflictPage;