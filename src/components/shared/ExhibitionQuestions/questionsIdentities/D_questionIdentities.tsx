import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "./cred/myjson.json"

const QuestionFourIdentities = () => {

    const [answerFourIdentities, setAnswerFourIdentities] = useState() 

    const currentCountryD = typeof window !== 'undefined' ? localStorage.getItem('countryIdentities') : null
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[678756205];

        const valueD = JSON.stringify(answerFourIdentities)
        const resultD = await sheetD.addRow({country: currentCountryD, questionFour: valueD});
        return resultD;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
 
//    useEffect(() => {
//        localStorage.setItem('answerFourIdentities', JSON.stringify(answerFourIdentities));
//      }, [answerFourIdentities]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersFourIdentities = [
        "It is very important for me to know which social gender I belong to. I am part of my gender and I cannot change it like my internet provider.",
        "In my opinion too much attention is paid to the issue of identity. It does not matter if I have an identity of any kind. The only thing that matters is my own happiness.",
        "For me, the question of identity is of no interest. I do not even know who I am. And if I knew, what good would it do me?",
        "I refuse the question of my identity. It presupposes that there is something in me that always remains the same - my nature, including me as a sexual being. But that is not the case with me. To me, chasing my identity means chasing a ghost.",
        "The world we live in is still dominated by gender roles. That is the reason why I am interested in it. However, I hope that in future generations it will not matter what gender you belong to."
    ]
    const onOptionChange = e => {
        setAnswerFourIdentities(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "exhibitions/identities/IdentitiesExhibitionMap";
      };

return (
<React.Fragment>

<h1 className="mt-5">
"Identity" means: having the answer to the question of who I actually am. "Gender identity" therefore means: having the answer to the question of which social gender I actually belong to. How important is the answer to this question to you?
</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourIdentities.map((possAnswFourIdentities, index) => (
          <Form.Check
            type="radio"
            value={possAnswFourIdentities}
            label={possAnswFourIdentities}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswFourIdentities === answerFourIdentities }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
           <div className="exh_submit_button">
                <div className="exh_arrow_container">
            <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourIdentities} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Submit & Show Result</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourIdentities

