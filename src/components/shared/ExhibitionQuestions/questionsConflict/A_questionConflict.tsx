import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "./cred/myjson.json"

const QuestionOneConflict = () => {

 const [answerOneConflict, setAnswerOneConflict] = useState() 

 const currentCountryA = typeof window !== 'undefined' ? localStorage.getItem('countryConflict') : null
 const doc = new GoogleSpreadsheet(creds.sheet_id)

 const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetA = doc.sheetsById[0];

        const valueA = JSON.stringify(answerOneConflict)
        const resultA = await sheetA.addRow({country: currentCountryA, questionOne: valueA});
        return resultA;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
    
//    useEffect(() => {
//        localStorage.setItem('answerOneConflict', JSON.stringify(answerOneConflict));
//      }, [answerOneConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersOneConflict = [
        "Answer 1. The following three objects deal with rising food prices and the effects of wars, with geopolitical conflicts and social hierarchies.", 
        "Answer 2. hfuiwhfalfjsjaiudgjd", 
        "Answer 3. hudiaghiudahgdkjgfdngkjfd"
    ]
    const onOptionChange = e => {
        setAnswerOneConflict(e.target.value) 
    }

    const handleSubmitA = (e) => {
        e.preventDefault()
        appendSpreadsheet()
        } 

return (
<React.Fragment>

<h1 className="mt-5">Question 1: new test question what needs to be improved here?</h1>

        <Form onSubmit={handleSubmitA} >
            {AnswersOneConflict.map(possAnswOneConflict => (
          <Form.Check
            type="radio"
            value={possAnswOneConflict}
            label={possAnswOneConflict}
            checked={possAnswOneConflict === answerOneConflict }
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
            href="/exhibitions/conflicts/ConflictQuestions/2ndQuestionConflict">
                <h1 style={{color: "white"}}>Next page</h1>
            </Button>
         </div>

</React.Fragment>
    )
  }

export default QuestionOneConflict

