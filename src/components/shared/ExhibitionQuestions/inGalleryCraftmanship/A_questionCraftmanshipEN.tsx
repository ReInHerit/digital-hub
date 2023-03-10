import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsCraftmanship/cred/myjson.json"

const QuestionOneCraftmanship = () => {

 const [answerOneCraftmanship, setAnswerOneCraftmanship] = useState() 

 const currentCountryCY = "\"Cyprus\""
 const doc = new GoogleSpreadsheet(creds.sheet_id)

 const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetA = doc.sheetsById[538400691];

        const valueA = JSON.stringify(answerOneCraftmanship)
        const resultA = await sheetA.addRow({country: currentCountryCY, questionOne: valueA});
        return resultA;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
    
//    useEffect(() => {
//        localStorage.setItem('answerOneCraftmanship', JSON.stringify(answerOneCraftmanship));
//      }, [answerOneCraftmanship]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersOneCraftmanship = [
      "The cheapest.",
      "The best one, the handmade piece of furniture. Machine production never reaches the quality of craftsmanship.",
      "The machine-made piece of furniture. Machines work more precisely than people.",
      "The one that has the smallest ecological footprint. I think it’s the machine-made one because if you count it down per unit it probably takes less energy to make.",
      "The one that has the smallest ecological footprint. I think it’s the handmade one. The energy that a person puts into something is sustainable. Very often energy used by machines is very often non-sustainable.",
      "The one that lasts longer. The handmade one.",
      "The handmade one. With my purchase, I ensure that the craftsman can earn his living and not give it to a money-hungry investor.",
      "I do not care. They are the same anyway."
    ]
    const onOptionChange = e => {
        setAnswerOneCraftmanship(e.target.value) 
    }

    const handleSubmitA = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/craftmanship/inGalleryEN/3rdQuestionCraftmanshipEN";
      };


      return (
        <React.Fragment>
          <h1 className="mt-5">
          If you had the choice between a handmade piece of furniture and the same piece of machine-made furniture, which one would you choose?
          </h1>
          <Form onSubmit={handleSubmitA}>
            {AnswersOneCraftmanship.map((possAnswOneCraftmanship, index) => (
              <Form.Check
                type="radio"
                name="exh_questions"
                value={possAnswOneCraftmanship}
                label={possAnswOneCraftmanship}
                id={`answer-${index}`}
                key={`answer-${index}`}
                checked={possAnswOneCraftmanship === answerOneCraftmanship}
                onChange={onOptionChange}
              ></Form.Check>
            ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                    <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
                </div>
                <Button className="exh_submit_btn" type="submit" disabled={!answerOneCraftmanship}  onClick={handleSubmitA} >
                <h1 style={{ color: "white" }}>Next Question</h1>
                </Button>
            </div>  
        </Form>
</React.Fragment>
    )
  }

export default QuestionOneCraftmanship

