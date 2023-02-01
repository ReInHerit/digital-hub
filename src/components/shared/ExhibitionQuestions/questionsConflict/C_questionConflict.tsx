import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "./cred/myjson.json"

const QuestionThreeConflict = () => {

    const [answerThreeConflict, setAnswerThreeConflict] = useState() 

    const currentCountryC = typeof window !== 'undefined' ? localStorage.getItem('countryConflict') : null
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetC = doc.sheetsById[1939633244];

        const valueC = JSON.stringify(answerThreeConflict)
        const resultC = await sheetC.addRow({country: currentCountryC, questionThree: valueC});
        return resultC;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
  
 //   useEffect(() => {
 //       localStorage.setItem('answerThreeConflict', JSON.stringify(answerThreeConflict));
 //     }, [answerThreeConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerThree"
    const AnswersThreeConflict = [
        "Answer 1. Test for three.", 
        "Answer 2. Test for three", 
        "Answer 3. test for three"
    ]
    const onOptionChange = e => {
        setAnswerThreeConflict(e.target.value) 
    }

    const handleSubmitC = (e) => {
        e.preventDefault()
        appendSpreadsheet()
    } 

return (
<React.Fragment>

<h1 className="mt-5">Question 3: new test question for 3?</h1>

        <Form onSubmit={handleSubmitC} >
            {AnswersThreeConflict.map(possAnswThreeConflict => (
          <Form.Check
            type="radio"
            value={possAnswThreeConflict}
            label={possAnswThreeConflict}
            checked={possAnswThreeConflict === answerThreeConflict }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
        <div className="d-grid mt-5">
            <Button className="btn-primary rounded-pill m-3 mt-0" 
            type="submit"
            >
                <h1 style={{color: "white"}}>Confirm your choice</h1>
            </Button>
         </div>        
         </Form>

            <div className="d-grid mt-5">
                <Button className="btn-primary rounded-pill m-3 mt-0" 
                // href="exhibitions/conflicts/ConflictExhibitionOverview"
                href="exhibitions/conflicts/ConflictExhibitionOverview"
                >
                    <h1 style={{color: "white"}}>Next Page</h1>
                </Button>
            </div>
</React.Fragment>
    )
  }

export default QuestionThreeConflict

