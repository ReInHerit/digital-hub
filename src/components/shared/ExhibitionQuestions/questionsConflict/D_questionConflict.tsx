import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "./cred/myjson.json"

const QuestionFourConflict = () => {

    const [answerFourConflict, setAnswerFourConflict] = useState() 

    const currentCountryD = typeof window !== 'undefined' ? localStorage.getItem('countryConflict') : null
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[1882066466];

        const valueD = JSON.stringify(answerFourConflict)
        const resultD = await sheetD.addRow({country: currentCountryD, questionFour: valueD});
        return resultD;

    } catch (e) {
        console.error("Error: ", e);
        }
    }

 
//    useEffect(() => {
//        localStorage.setItem('answerFourConflict', JSON.stringify(answerFourConflict));
//      }, [answerFourConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersFourConflict = [
        "Answer 1. Test for 4.", 
        "Answer 2. Test for 4.", 
        "Answer 3. Test for 4."
    ]
    const onOptionChange = e => {
        setAnswerFourConflict(e.target.value) 
    }

    const handleSubmitD = (e) => {
        e.preventDefault()
        appendSpreadsheet()
    } 

return (
<React.Fragment>

<h1 className="mt-5">Question 4: new test question for 4?</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourConflict.map(possAnswFourConflict => (
          <Form.Check
            type="radio"
            value={possAnswFourConflict}
            label={possAnswFourConflict}
            checked={possAnswFourConflict === answerFourConflict }
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
                <Button className="btn-primary rounded-pill m-3 mt-0" href="exhibitions/conflicts/ConflictExhibitionMap">
                    <h1 style={{color: "white"}}>Next Page</h1>
                </Button>
            </div>
</React.Fragment>
    )
  }

export default QuestionFourConflict

