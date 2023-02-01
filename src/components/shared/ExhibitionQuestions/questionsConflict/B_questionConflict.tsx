import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "./cred/myjson.json"

const QuestionTwoConflict = () => {

    const [answerTwoConflict, setAnswerTwoConflict] = useState() 

    const currentCountryB = typeof window !== 'undefined' ? localStorage.getItem('countryConflict') : null
    const doc = new GoogleSpreadsheet(creds.sheet_id)


    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetB = doc.sheetsById[713196235];

        const valueB = JSON.stringify(answerTwoConflict)
        const resultB = await sheetB.addRow({country: currentCountryB, questionTwo: valueB});
        return resultB;

    } catch (e) {
        console.error("Error: ", e);
        }
    }

 //   useEffect(() => {
 //       localStorage.setItem('answerTwoConflict', JSON.stringify(answerTwoConflict));
 //     }, [answerTwoConflict]);
    

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersTwoConflict = [
        "Answer 1. test for 2.", 
        "Answer 2. test for 2", 
        "Answer 3. test for 2"
    ]
    const onOptionChange = e => {
        setAnswerTwoConflict(e.target.value) 
    }

    const handleSubmitB = (e) => {
        e.preventDefault()
        appendSpreadsheet()
    } 

return (
<React.Fragment>

<h1 className="mt-5">Question 2: new test question what needs to be improved here?</h1>

        <Form onSubmit={handleSubmitB} >
            {AnswersTwoConflict.map(possAnswTwoConflict => (
          <Form.Check
            type="radio"
            value={possAnswTwoConflict}
            label={possAnswTwoConflict}
            checked={possAnswTwoConflict === answerTwoConflict }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
         <div className="d-grid mt-5">
            <Button className="btn-primary rounded-pill m-3 mt-0" 
            type="submit"
            >
                <h1 style={{color: "white"}}>Confirm your choice</h1>
            </Button>
         </div>        </Form>

            <div className="d-grid mt-5">
                <Button className="btn-primary rounded-pill m-3 mt-0" href="exhibitions/conflicts/ConflictQuestions/3rdQuestionConflict">
                    <h1 style={{color: "white"}}>Next Page</h1>
                </Button>
            </div>

</React.Fragment>
    )
  }
  
export default QuestionTwoConflict

