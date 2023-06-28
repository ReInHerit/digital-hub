import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsCraftmanship/cred/myjson.json"

const QuestionTwoCraftmanship = () => {

    const [answerTwoCraftmanship, setAnswerTwoCraftmanship] = useState() 

    const currentCountryCY = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)


    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetB = doc.sheetsById[713196235];

        const valueB = JSON.stringify(answerTwoCraftmanship)
        const resultB = await sheetB.addRow({country: currentCountryCY, questionTwo: valueB});
        return resultB;

    } catch (e) {
        console.error("Error: ", e);
        }
    }

 //   useEffect(() => {
 //       localStorage.setItem('answerTwoCraftmanship', JSON.stringify(answerTwoCraftmanship));
 //     }, [answerTwoCraftmanship]);
    

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersTwoCraftmanship = [
       "coming soon"
    ]
    const onOptionChange = e => {
        setAnswerTwoCraftmanship(e.target.value) 
    }

    const handleSubmitB = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/craftmanship/inGalleryCY/3rdQuestionCraftmanshipCY";
      };

return (
<React.Fragment>

<h1 className="mt-5">
COMING SOON
</h1>

        <Form onSubmit={handleSubmitB} >
            {AnswersTwoCraftmanship.map((possAnswTwoCraftmanship, index) => (
          <Form.Check
            type="radio" name="exh_questions"
            value={possAnswTwoCraftmanship}
            label={possAnswTwoCraftmanship}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswTwoCraftmanship === answerTwoCraftmanship }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
            </div>
                <Button className="exh_submit_btn" 
                type="submit" disabled={!answerTwoCraftmanship} onClick={handleSubmitB} >
                <h1 style={{ color: "white" }}>Επόμενη ερώτηση</h1>
                </Button>
            </div> 
        </Form>

</React.Fragment>
    )
  }
  
export default QuestionTwoCraftmanship

