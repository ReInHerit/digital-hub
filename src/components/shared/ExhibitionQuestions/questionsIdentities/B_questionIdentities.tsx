import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "./cred/myjson.json"

const QuestionTwoIdentities = () => {

    const [answerTwoIdentities, setAnswerTwoIdentities] = useState() 

    const currentCountryB = typeof window !== 'undefined' ? localStorage.getItem('countryIdentities') : null
    const doc = new GoogleSpreadsheet(creds.sheet_id)


    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetB = doc.sheetsById[713196235];

        const valueB = JSON.stringify(answerTwoIdentities)
        const resultB = await sheetB.addRow({country: currentCountryB, questionTwo: valueB});
        return resultB;

    } catch (e) {
        console.error("Error: ", e);
        }
    }

 //   useEffect(() => {
 //       localStorage.setItem('answerTwoIdentities', JSON.stringify(answerTwoIdentities));
 //     }, [answerTwoIdentities]);
    

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersTwoIdentities = [
        "No. I can not imagine that. A gender role is simply not an invention of a poet, but linked to biological sex. But as long as the sexes are biologically different, there will also be different gender roles.",
        "I am not even sure to appreciate that. I even welcome different gender roles. But the problem with gender roles is not their existence. It is discrimination that can be associated with such a role.",
        "Yes. After all, gender is not natural, but only a human invention. If you want to build a society without gender roles, you simply have to stop paying too much attention to gender. Why should not that be possible?",
        "I can even imagine a society divided in two. In one part of such a society there will still be gender roles. And for the other part, they just do not matter."
         ]
    const onOptionChange = e => {
        setAnswerTwoIdentities(e.target.value) 
    }

    const handleSubmitB = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/IdentitiesQuestions/3rdQuestionIdentities";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Gender roles existed at all times and in every society. What do you think: is a society without gender roles possible in the future?
</h1>

        <Form onSubmit={handleSubmitB} >
            {AnswersTwoIdentities.map((possAnswTwoIdentities, index) => (
          <Form.Check
            type="radio" name="exh_questions"
            value={possAnswTwoIdentities}
            label={possAnswTwoIdentities}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswTwoIdentities === answerTwoIdentities }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
            </div>
                <Button className="exh_submit_btn" 
                type="submit" disabled={!answerTwoIdentities} onClick={handleSubmitB} >
                <h1 style={{ color: "white" }}>Next Question</h1>
                </Button>
            </div> 
        </Form>

</React.Fragment>
    )
  }
  
export default QuestionTwoIdentities

