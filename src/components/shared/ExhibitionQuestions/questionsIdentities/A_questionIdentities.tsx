import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "./cred/myjson.json"

const QuestionOneIdentities = () => {

 const [answerOneIdentities, setAnswerOneIdentities] = useState() 

 const currentCountryA = typeof window !== 'undefined' ? localStorage.getItem('countryIdentities') : null
 const doc = new GoogleSpreadsheet(creds.sheet_id)

 const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetA = doc.sheetsById[538400691];

        const valueA = JSON.stringify(answerOneIdentities)
        const resultA = await sheetA.addRow({country: currentCountryA, questionOne: valueA});
        return resultA;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
    
//    useEffect(() => {
//        localStorage.setItem('answerOneIdentities', JSON.stringify(answerOneIdentities));
//      }, [answerOneIdentities]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersOneIdentities = [
      "Yes, I agree. Rights are always tied to roles. Anyone who does not take on a role is therefore left out without any rights. It starts with citizenship and ends with gender.",
      "Anyone who speaks in this way tacitly assumes that one can freely choose one's role. However, roles are not chosen, they are imposed by society. This also applies to the freedom associated with a role. But of what use is the biggest freedom if it is not the freedom that I want? - Nothing.",
      "That is only one side of the coin. Because even greater than the freedoms one gains are the freedoms one does not gain. So whoever takes on a role closes the door to others and thus also to other privileges. Therefore, taking on a role is always a negative business.",
      "I do not like thinking about my life in terms of social roles. I am just me and I just want to be that. For me, taking on a role always means being fake and having to pretend."
            ]
    const onOptionChange = e => {
        setAnswerOneIdentities(e.target.value) 
    }

    const handleSubmitA = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/IdentitiesQuestions/2ndQuestionIdentities";
      };

      return (
        <React.Fragment>
          <h1 className="mt-5">
          “Roles, including gender roles, are always associated with privileges. Only those who take on a role can enjoy the privileges associated with it. Therefore, taking on any role increases the space of personal freedom.” –
          <br /> Do you agree with this opinion?
          </h1>
          <Form onSubmit={handleSubmitA}>
            {AnswersOneIdentities.map((possAnswOneIdentities, index) => (
              <Form.Check
                type="radio"
                name="exh_questions"
                value={possAnswOneIdentities}
                label={possAnswOneIdentities}
                id={`answer-${index}`}
                key={`answer-${index}`}
                checked={possAnswOneIdentities === answerOneIdentities}
                onChange={onOptionChange}
              ></Form.Check>
            ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                    <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
                </div>
                <Button className="exh_submit_btn" type="submit" disabled={!answerOneIdentities}  onClick={handleSubmitA} >
                <h1 style={{ color: "white" }}>Next Question</h1>
                </Button>
            </div>  
        </Form>
</React.Fragment>
    )
  }

export default QuestionOneIdentities

