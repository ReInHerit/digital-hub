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
        "Granted, no state can be perfect or free of conflicts. In a democracy, however, there is always a way of resolving conflicts without violence. Anyone can get involved politically or take legal action.",
        "Every social system takes far too much time to react to social conflicts. Those who wait for their own country to do something effective to combat social inequality, for example end up waiting too long.",
        "No system, even the best, can ever be perfectly fair. That is in the nature of the systems. We have to put up with that.",
        "Structural violence is always abstract violence. It becomes actual violence only through the people who are part of the system and benefit from it. The most effective lever against structural violence is therefore active resistance to those who enforce it.",
        "Misogyny or racism are not only built into social systems, but also take place in the minds of the population. It is therefore less important to change the system than to change people's attitudes."
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

<h1 className="mt-5">
Sometimes conflicts are not caused by individuals but because they are built into the social system in which we live. One then speaks of “structural violence”. How should we deal with this structural violence?
    </h1>

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
