import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionOneConflictEN = () => {

 const [answerOneConflictDE, setAnswerOneConflictDE] = useState() 

 const currentCountryDE = "\"Greece\""
 const doc = new GoogleSpreadsheet(creds.sheet_id)

 const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetA = doc.sheetsById[538400691];

        const valueA = JSON.stringify(answerOneConflictDE)
        const resultA = await sheetA.addRow({country: currentCountryDE, questionOne: valueA});
        return resultA;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
    
//    useEffect(() => {
//        localStorage.setItem('answerOneConflict', JSON.stringify(answerOneConflict));
//      }, [answerOneConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersOneConflictDE = [
    "No. Such a world is not possible. Whether you like it or not, violence is in fact always a solution. It will always remain a solution. It is that simple.",
    "In a world without guns, the gun owner is king. At least that is what modern evolutionary biology says.  Anyone who has the opportunity to use violence will eventually do so.",
    "Those who starve or starve are more likely to resort to violence. Because if you have nothing to lose, violence is always an option. Precisely because one has nothing left to lose. Conversely, this also means that those who want a world without conflicts may also have to accept the redistribution of wealth or resources.",
    "Violence is never my first option. But if others resort to violence, I would defend myself – if necessary with violence.",
    "I don't see why a world without violence shouldn't be possible. There is always an alternative to violence. For those who have realised that violence only generates counter-violence, renunciation of violence is the only way to improvement."
    ]
    const onOptionChange = e => {
        setAnswerOneConflictDE(e.target.value) 
    }

    const handleSubmitA = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryEN/2ndQuestionConflictEN";
      };


      return (
        <React.Fragment>
          <h1 className="mt-5">
          "Violence is no solution" – that's what many people say when it comes to conflicts. They wish for a world in which conflicts are resolved without violence. What do you think: Can such a world become reality or will it remain a pipe dream?          </h1>
          <Form onSubmit={handleSubmitA}>
            {AnswersOneConflictDE.map((possAnswOneConflictDE, index) => (
              <Form.Check
                type="radio"
                name="exh_questions"
                value={possAnswOneConflictDE}
                label={possAnswOneConflictDE}
                id={`answer-${index}`}
                key={`answer-${index}`}
                checked={possAnswOneConflictDE === answerOneConflictDE}
                onChange={onOptionChange}
              ></Form.Check>
            ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                    <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
                </div>
                <Button className="exh_submit_btn" type="submit" disabled={!answerOneConflictDE}  onClick={handleSubmitA} >
                <h1 style={{ color: "white" }}>Next question</h1>
                </Button>
            </div>  
        </Form>
</React.Fragment>
    )
  }

export default QuestionOneConflictEN

