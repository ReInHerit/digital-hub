import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "./cred/myjson.json"

const QuestionThreeIdentities = () => {

    const [answerThreeIdentities, setAnswerThreeIdentities] = useState() 

    const currentCountryC = typeof window !== 'undefined' ? localStorage.getItem('countryIdentities') : null
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetC = doc.sheetsById[1939633244];

        const valueC = JSON.stringify(answerThreeIdentities)
        const resultC = await sheetC.addRow({country: currentCountryC, questionThree: valueC});
        return resultC;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
  
 //   useEffect(() => {
 //       localStorage.setItem('answerThreeIdentities', JSON.stringify(answerThreeIdentities));
 //     }, [answerThreeIdentities]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerThree"
    const AnswersThreeIdentities = [ 
        "Gender roles have their roots in human biological diversity. If all people were biologically the same sex, the roles would not exist.",
        "All roles are always about the distribution of power. The powerful are called \"lords\" and the inferior \"servants\". It is the same with the genders.",
        "It does not matter where gender roles come from. It comes down to overcoming them when they are unjust. All you need is good will.",
        "In the past, gender roles were considered natural. Today we know better. For example, people have learned to distinguish between “sex” and “gender”. From a historical point of view, gender roles are therefore nothing more than anthropological errors.",
        "\"Chauvinism\" is the belief in the superiority of one's own group. Just take skin color, religion and of course gender as examples. The classic gender roles are only the manifestations of this chauvinism."         
    ]
    const onOptionChange = e => {
        setAnswerThreeIdentities(e.target.value) 
    }
    
    const handleSubmitC = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "exhibitions/identities/IdentitiesExhibitionOverview";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Where do gender roles come from?
</h1>

        <Form onSubmit={handleSubmitC} >
            {AnswersThreeIdentities.map((possAnswThreeIdentities, index) => (
          <Form.Check
            type="radio"
            value={possAnswThreeIdentities}
            label={possAnswThreeIdentities}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswThreeIdentities === answerThreeIdentities }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                    <div className="exh_arrow_container">
                    <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
            </div>
                    <Button className="exh_submit_btn" 
                    type="submit" disabled={!answerThreeIdentities} onClick={handleSubmitC} >
                    <h1 style={{ color: "white" }}>Submit & Enter Exhibition</h1>
                    </Button>
            </div>        
        </Form>

   
</React.Fragment>
    )
  }

export default QuestionThreeIdentities

