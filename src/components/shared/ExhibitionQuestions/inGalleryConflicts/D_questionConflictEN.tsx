import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionFourConflictEN = () => {

    const [answerFourConflictDE, setAnswerFourConflictDE] = useState() 

    const currentCountryDE = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[678756205];

        const valueD = JSON.stringify(answerFourConflictDE)
        const resultD = await sheetD.addRow({country: currentCountryDE, questionFour: valueD});
        return resultD;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
 
//    useEffect(() => {
//        localStorage.setItem('answerFourConflict', JSON.stringify(answerFourConflict));
//      }, [answerFourConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersFourConflictDE = [
    "Generally, yes. Often one would rather be right than understand the other person. The end of dogmatism is often the end of a conflict.",
    "No. Because every understanding sooner or later comes to an end. For example, I cannot understand when others do not understand that climate change threatens humanity. That is where my understanding ends.",
    "This view is wrong. Quite often I can understand the attitude of a person and thus also understand it. However, the conflict has not yet been resolved by that. Because often I just do not share his attitude and I will not do it either.",
    "It is not about understanding the other person, it is about getting along with them. In the case of a conflict, I therefore look for solutions that both parties can agree to. Results are more important than mutual understanding.",
    "Yes. Because understanding the other opens up new perspectives and ways of resolving the conflict.",
    "No. It is not about understanding, it is about interests. You do not have to understand them, they are just there."
    ]
    const onOptionChange = e => {
        setAnswerFourConflictDE(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryEN/ConflictExhibitionMapEN";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Many people think that conflicts arise primarily because people do not understand each other. Do you agree?</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourConflictDE.map((possAnswFourConflictDE, index) => (
          <Form.Check
            type="radio"
            value={possAnswFourConflictDE}
            label={possAnswFourConflictDE}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswFourConflictDE === answerFourConflictDE }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
           <div className="exh_submit_button">
                <div className="exh_arrow_container">
            <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourConflictDE} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Submit & Show Result</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourConflictEN

