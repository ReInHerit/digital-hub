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
        "No. Resistance can be a very good thing and sometimes even becomes a duty. Often you even have to defend what is important to you. In this case I not only have the right but also the duty to defend myself.",
        "I don't know if it is evil to fight back. But for my part I abhor any form of violence. Therefore, if in doubt, I would not defend myself.",
        "Anyone who thinks it is evil to stand up for one's freedom, for example, morally equates oppressor and victim. But that is wrong. A perpetrator is never on the same moral level as the victim. So it is not evil to fight back.",
        "Anyone who resists creates counter-violence with his violence. This definitely leads to a spiral of violence. So it may not be evil to fight back, but it is at least unwise.",
        "Imagine your parents' house suddenly being illegally occupied. What should prevent you from fighting back? Nothing. Any questions?"
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

<h1 className="mt-5">
Is it bad if you fight back?
    </h1>

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

