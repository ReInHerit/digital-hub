import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionTwoConflictEN = () => {

    const [answerTwoConflictDE, setAnswerTwoConflictDE] = useState() 

    const currentCountryDE = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)


    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetB = doc.sheetsById[713196235];

        const valueB = JSON.stringify(answerTwoConflictDE)
        const resultB = await sheetB.addRow({country: currentCountryDE, questionTwo: valueB});
        return resultB;

    } catch (e) {
        console.error("Error: ", e);
        }
    }

 //   useEffect(() => {
 //       localStorage.setItem('answerTwoConflict', JSON.stringify(answerTwoConflict));
 //     }, [answerTwoConflict]);
    

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersTwoConflictDE = [
    "No. Resistance can be a very good thing and sometimes even becomes a duty. Often you even have to defend what is important to you. In this case I not only have the right but also the duty to defend myself.",   
    "I don't know if it is evil to fight back. But for my part I abhor any form of violence. Therefore, if in doubt, I would not defend myself.",
    "Anyone who thinks it is evil to stand up for one's freedom, for example, morally equates oppressor and victim. But that is wrong. A perpetrator is never on the same moral level as the victim. So it is not evil to fight back.",
    "Anyone who resists creates counter-violence with his violence. This definitely leads to a spiral of violence. So it may not be evil to fight back, but it is at least unwise.",
    "Imagine your parents' house suddenly being illegally occupied. What should prevent you from fighting back? Nothing. Any questions?"   
    ]
    const onOptionChange = e => {
        setAnswerTwoConflictDE(e.target.value) 
    }

    const handleSubmitB = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryEN/3rdQuestionConflictEN";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Is it bad if you fight back?</h1>

        <Form onSubmit={handleSubmitB} >
            {AnswersTwoConflictDE.map((possAnswTwoConflictDE, index) => (
          <Form.Check
            type="radio" name="exh_questions"
            value={possAnswTwoConflictDE}
            label={possAnswTwoConflictDE}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswTwoConflictDE === answerTwoConflictDE }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
                <Button className="exh_submit_btn" 
                type="submit" disabled={!answerTwoConflictDE} onClick={handleSubmitB} >
                <h1 style={{ color: "white" }}>Next question</h1>
                </Button>
            </div> 
        </Form>

</React.Fragment>
    )
  }
  
export default QuestionTwoConflictEN

