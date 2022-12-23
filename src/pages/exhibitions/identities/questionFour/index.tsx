import React from "react"
import { Container, Badge, Button, Form } from "react-bootstrap"
import BaseExhibitionIdent from "../../../../components/static/BaseExhibitionIdentities"

const IdentitiesExhibit = () => {

const [answerFour, setAnswerFour] = React.useState([]) 

const onOptionChange = e => {
    setAnswerFour(e.target.value)
  }

const handleAnswerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(Submit)
}

return (
<BaseExhibitionIdent>
  <Container fluid className="mt-5 p-5">
  <div className="d-grid gap-2">
  <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
  </div>
  <div className="identities">
  <h4>What is your relationship to conflicts? <br />
Find out by answering the quiz questions</h4>

<h1>Question 4:
new test question what needs to be improved here?</h1>

<Form style={{fontSize: "2vh", fontFamily: "Roboto Mono"}} onSubmit={handleAnswerSubmit}>
        <Form.Check
        type="radio" 
        value="answerFourOptionOne"
        name="answerFour" 
        label="Answer 1. The following three objects deal with rising food prices and the effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies."
        checked={answerFour === "answerFourOptionOne"}
        onChange={onOptionChange}
        />
        <Form.Check
        type="radio" 
        value="answerFourOptionTwo"
        name="answerFour" 
        label="Answer 2. The following three objects deal with rising food prices and the effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies."
        checked={answerFour === "answerFourOptionTwo"}
        onChange={onOptionChange}
        />    
       <Form.Check
        type="radio" 
        value="answerFourOptionThree"
        name="answerFour" 
        label="Answer 3. The following three objects deal with rising food prices and the effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies. Effects of wars, with geopolitical conflicts and social hierarchies."
        checked={answerFour === "answerFourOptionThree"}
        onChange={onOptionChange}
        />
        <input type="submit" value="Submit"/>
</Form>

<p>Selected answer <strong>{answerFour}</strong>
</p>
<div className="d-grid gap-2">
<Button href="exhibitions/identities/FinalPage" className="btn-primary rounded-pill m-5"><h1 style={{color: "white"}}>Submit & Show Results</h1></Button>
</div>
</div>

  </Container>
</BaseExhibitionIdent>
    )
  }

export default IdentitiesExhibit;
