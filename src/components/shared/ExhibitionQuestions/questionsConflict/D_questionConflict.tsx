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
        const sheetD = doc.sheetsById[678756205];

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
        "Generally, yes. Often one would rather be right than understand the other person. The end of dogmatism is often the end of a conflict.",
        "No. Because every understanding sooner or later comes to an end. For example, I cannot understand when others do not understand that climate change threatens humanity. That is where my understanding ends.",
        "This view is wrong. Quite often I can understand the attitude of a person and thus also understand it. However, the conflict has not yet been resolved by that. Because often I just do not share his attitude and I will not do it either.",
        "It is not about understanding the other person, it is about getting along with them. In the case of a conflict, I therefore look for solutions that both parties can agree to. Results are more important than mutual understanding.",
        "Yes. Because understanding the other opens up new perspectives and ways of resolving the conflict.",
        "No. It is not about understanding, it is about interests. You do not have to understand them, they are just there."
    ]
    const onOptionChange = e => {
        setAnswerFourConflict(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "exhibitions/conflicts/ConflictExhibitionMap";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Many people think that conflicts arise primarily because people do not understand each other. Do you agree?
</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourConflict.map((possAnswFourConflict, index) => (
          <Form.Check
            type="radio"
            value={possAnswFourConflict}
            label={possAnswFourConflict}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswFourConflict === answerFourConflict }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
           <div className="exh_submit_button">
                <div className="exh_arrow_container">
            <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourConflict} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Submit & Show Result</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourConflict

