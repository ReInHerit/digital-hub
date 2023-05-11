import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionThreeConflictEN = () => {

    const [answerThreeConflictDE, setAnswerThreeConflictDE] = useState() 

    const currentCountryDE = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetC = doc.sheetsById[1939633244];

        const valueC = JSON.stringify(answerThreeConflictDE)
        const resultC = await sheetC.addRow({country: currentCountryDE, questionThree: valueC});
        return resultC;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
  
 //   useEffect(() => {
 //       localStorage.setItem('answerThreeConflict', JSON.stringify(answerThreeConflict));
 //     }, [answerThreeConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerThree"
    const AnswersThreeConflictDE = [ 
    "Granted, no state can be perfect or free of conflicts. In a democracy, however, there is always a way of resolving conflicts without violence. Anyone can get involved politically or take legal action.",
    "Every social system takes far too much time to react to social conflicts. Those who wait for their own country to do something effective to combat social inequality, for example end up waiting too long.",
    "No system, even the best, can ever be perfectly fair. That is in the nature of the systems. We have to put up with that.",
    "Structural violence is always abstract violence. It becomes actual violence only through the people who are part of the system and benefit from it. The most effective lever against structural violence is therefore active resistance to those who enforce it.",
    "Misogyny or racism are not only built into social systems, but also take place in the minds of the population. It is therefore less important to change the system than to change people's attitudes."
    ]
    const onOptionChange = e => {
        setAnswerThreeConflictDE(e.target.value) 
    }
    
    const handleSubmitC = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryEN/1stQuestionConflictEN";
      };
 
return (
<React.Fragment>

<h1 className="mt-5">
Sometimes conflicts are not caused by individuals but because they are built into the social system in which we live. One then speaks of “structural violence”. How should we deal with this structural violence?</h1>

        <Form onSubmit={handleSubmitC} >
            {AnswersThreeConflictDE.map((possAnswThreeConflictDE, index) => (
          <Form.Check
            type="radio"
            value={possAnswThreeConflictDE}
            label={possAnswThreeConflictDE}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswThreeConflictDE === answerThreeConflictDE }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                    <div className="exh_arrow_container">
                    <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
                    <Button className="exh_submit_btn" 
                    type="submit" disabled={!answerThreeConflictDE} onClick={handleSubmitC} >
                    <h1 style={{ color: "white" }}>Thanks and enjoy the exhibition!</h1>
                    </Button>
            </div>        
        </Form>


</React.Fragment>
    )
  }

export default QuestionThreeConflictEN

